import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { User, Edit, LogOut, AlertCircle } from 'lucide-react';

const ProfilePage = () => {
  const { user, signOut } = useAuth();
  const [member, setMember] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('members')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          throw error;
        }

        setMember(data || null);
      } catch (err: any) {
        console.error('Error fetching member data:', err);
        setError('Erro ao carregar dados do perfil');
      } finally {
        setLoading(false);
      }
    };

    fetchMemberData();
  }, [user]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Não informado';
    try {
      return new Date(dateString).toLocaleDateString('pt-BR');
    } catch (err) {
      return 'Data inválida';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-900 py-6 px-6">
            <h2 className="text-2xl font-bold text-white">Meu Perfil</h2>
            <p className="mt-1 text-blue-200">
              Gerencie suas informações pessoais e acesse sua carteirinha
            </p>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                <AlertCircle className="flex-shrink-0 mr-2 mt-0.5" size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - User Info */}
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      {member?.photo_url ? (
                        <img 
                          src={member.photo_url} 
                          alt={member?.full_name || 'Usuário'} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User size={36} className="text-blue-900" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-center">
                      {member?.full_name || 'Usuário'}
                    </h3>
                    
                    <p className="text-gray-600 text-sm text-center mt-1">
                      {user?.email}
                    </p>
                    
                    {member && (
                      <p className="text-blue-900 text-sm font-medium mt-2">
                        Membro desde {formatDate(member.membership_date)}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link
                      to="/cadastro"
                      className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200 transition-colors"
                    >
                      <Edit size={16} className="mr-2" />
                      {member ? 'Editar Perfil' : 'Completar Cadastro'}
                    </Link>
                    
                    <button
                      onClick={() => signOut()}
                      className="flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sair
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Member Details & Actions */}
              <div className="md:w-2/3">
                {!member ? (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-6 mb-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cadastro Incompleto</h3>
                    <p className="text-yellow-700 mb-4">
                      Você ainda não completou seu cadastro como membro da igreja. Complete seu cadastro para ter acesso à carteirinha digital e outros benefícios.
                    </p>
                    <Link
                      to="/cadastro"
                      className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                      Completar Cadastro
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Informações Pessoais</h3>
                      </div>
                      <div className="p-6">
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Nome Completo</dt>
                            <dd className="mt-1 text-gray-900">{member.full_name}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-gray-900">{member.email}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                            <dd className="mt-1 text-gray-900">{member.phone || 'Não informado'}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Data de Nascimento</dt>
                            <dd className="mt-1 text-gray-900">{formatDate(member.birth_date)}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Endereço</dt>
                            <dd className="mt-1 text-gray-900">{member.address || 'Não informado'}</dd>
                          </div>
                          
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Data de Batismo</dt>
                            <dd className="mt-1 text-gray-900">{formatDate(member.baptism_date)}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Carteirinha de Membro</h3>
                      <p className="text-gray-700 mb-4">
                        Acesse sua carteirinha digital de membro da Igreja Evangélica Adonai. Você pode visualizar, baixar ou imprimir quando necessário.
                      </p>
                      <Link
                        to="/carteirinha"
                        className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                      >
                        Ver Carteirinha
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage