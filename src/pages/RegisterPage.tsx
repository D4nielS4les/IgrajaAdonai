import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Camera, Upload, AlertCircle, CheckCircle } from 'lucide-react';

interface MemberFormData {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  baptismDate: string;
}

const RegisterPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [existingMember, setExistingMember] = useState<any | null>(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<MemberFormData>();

  // Check if user already has a member profile
  useEffect(() => {
    const checkExistingMember = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('members')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching member data:', error);
          return;
        }

        if (data) {
          setExistingMember(data);
          // Pre-fill form with existing data
          setValue('fullName', data.full_name);
          setValue('email', data.email);
          setValue('phone', data.phone || '');
          setValue('birthDate', data.birth_date ? new Date(data.birth_date).toISOString().split('T')[0] : '');
          setValue('address', data.address || '');
          setValue('baptismDate', data.baptism_date ? new Date(data.baptism_date).toISOString().split('T')[0] : '');
          
          if (data.photo_url) {
            setPhotoPreview(data.photo_url);
          }
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    checkExistingMember();
  }, [user, setValue]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('A foto deve ter no máximo 5MB');
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        setError('O arquivo deve ser uma imagem');
        return;
      }
      
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const uploadPhoto = async (): Promise<string | null> => {
    if (!photoFile || !user) return null;
    
    try {
      const fileExt = photoFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `fotos/${fileName}`;
      
      const { error: uploadError, data } = await supabase.storage
        .from('members')
        .upload(filePath, photoFile);
        
      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error(`Erro ao fazer upload da foto: ${uploadError.message}`);
      }
      
      if (!data) {
        throw new Error('Erro ao fazer upload da foto: Nenhum dado retornado');
      }
      
      const { data: urlData } = supabase.storage.from('members').getPublicUrl(filePath);
      return urlData.publicUrl;
    } catch (err: any) {
      console.error('Photo upload error:', err);
      throw new Error(err.message || 'Erro ao fazer upload da foto');
    }
  };

  const onSubmit: SubmitHandler<MemberFormData> = async (data) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      let photoUrl = existingMember?.photo_url || null;
      
      // Upload new photo if selected
      if (photoFile) {
        photoUrl = await uploadPhoto();
      }
      
      const memberData = {
        user_id: user.id,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        birth_date: data.birthDate || null,
        address: data.address,
        baptism_date: data.baptismDate || null,
        photo_url: photoUrl,
      };
      
      if (existingMember) {
        // Update existing member
        const { error: updateError } = await supabase
          .from('members')
          .update(memberData)
          .eq('id', existingMember.id);
          
        if (updateError) throw updateError;
      } else {
        // Insert new member
        const { error: insertError } = await supabase
          .from('members')
          .insert([memberData]);
          
        if (insertError) throw insertError;
      }
      
      setSuccess(true);
      
      // Redirect to membership card page after 2 seconds
      setTimeout(() => {
        navigate('/carteirinha');
      }, 2000);
      
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Ocorreu um erro ao salvar os dados');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-900 py-6 px-6">
            <h2 className="text-2xl font-bold text-white">
              {existingMember ? 'Atualizar Cadastro de Membro' : 'Cadastro de Membro'}
            </h2>
            <p className="mt-1 text-blue-200">
              {existingMember 
                ? 'Atualize suas informações pessoais' 
                : 'Preencha o formulário abaixo para se cadastrar como membro da igreja'}
            </p>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                <AlertCircle className="flex-shrink-0 mr-2 mt-0.5" size={18} />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-start">
                <CheckCircle className="flex-shrink-0 mr-2 mt-0.5" size={18} />
                <span>
                  {existingMember 
                    ? 'Cadastro atualizado com sucesso!' 
                    : 'Cadastro realizado com sucesso!'}
                  {' '}Redirecionando para a página da carteirinha...
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 w-48 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-300">
                      {photoPreview ? (
                        <img 
                          src={photoPreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <Camera size={48} className="text-gray-400" />
                      )}
                    </div>
                    
                    <label className="block w-full">
                      <span className="sr-only">Escolher foto</span>
                      <input 
                        type="file" 
                        className="hidden"
                        accept="image/*"
                        onChange={handlePhotoChange}
                      />
                      <button
                        type="button"
                        onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200 transition-colors"
                      >
                        <Upload size={18} className="mr-2" />
                        {photoPreview ? 'Alterar foto' : 'Adicionar foto'}
                      </button>
                    </label>
                    <p className="mt-2 text-xs text-gray-500">
                      Foto para a carteirinha (máx. 5MB)
                    </p>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Nome Completo *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className={`mt-1 block w-full rounded-md border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      {...register('fullName', { required: 'Nome completo é obrigatório' })}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-300' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      {...register('email', { 
                        required: 'Email é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Telefone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(00) 00000-0000"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                        Data de Nascimento
                      </label>
                      <input
                        id="birthDate"
                        type="date"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        {...register('birthDate')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Endereço
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      {...register('address')}
                    />
                  </div>

                  <div>
                    <label htmlFor="baptismDate" className="block text-sm font-medium text-gray-700">
                      Data de Batismo
                    </label>
                    <input
                      id="baptismDate"
                      type="date"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      {...register('baptismDate')}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando...
                    </span>
                  ) : (
                    existingMember ? 'Atualizar Cadastro' : 'Finalizar Cadastro'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;