import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Church, Download, Printer, AlertCircle } from 'lucide-react';

const MembershipCardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [member, setMember] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('members')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            // No data found
            setError('Você ainda não completou seu cadastro como membro');
          } else {
            throw error;
          }
        }

        if (data) {
          setMember(data);
        }
      } catch (err: any) {
        console.error('Error fetching member data:', err);
        setError('Erro ao carregar dados do membro');
      } finally {
        setLoading(false);
      }
    };

    fetchMemberData();
  }, [user]);

  const handleDownloadPDF = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [85, 55] // Standard card size
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, 85, 55);
      pdf.save('carteirinha-membro-adonai.pdf');
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Erro ao gerar o PDF da carteirinha');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    try {
      return format(new Date(dateString), 'dd/MM/yyyy', { locale: ptBR });
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

  if (error) {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4 text-red-600">
              <AlertCircle size={48} />
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Cadastro Incompleto</h2>
            <p className="text-gray-700 text-center mb-6">{error}</p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/cadastro')}
                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                Completar Cadastro
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4 text-yellow-600">
              <AlertCircle size={48} />
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Dados não encontrados</h2>
            <p className="text-gray-700 text-center mb-6">Não foi possível encontrar seus dados de membro.</p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/cadastro')}
                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                Ir para Cadastro
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-900 py-6 px-6">
            <h2 className="text-2xl font-bold text-white">Carteirinha de Membro</h2>
            <p className="mt-1 text-blue-200">
              Sua identificação digital como membro da Igreja Evangélica Adonai
            </p>
          </div>

          <div className="p-6">
            <div className="mb-8 flex justify-center">
              {/* Membership Card */}
              <div 
                ref={cardRef}
                className="w-full max-w-md bg-white border-2 border-blue-900 rounded-lg overflow-hidden shadow-lg print:shadow-none"
                style={{ aspectRatio: '1.618/1' }}
              >
                {/* Card Header */}
                <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Church size={24} className="mr-2" />
                    <h3 className="text-lg font-bold">Igreja Evangélica Adonai</h3>
                  </div>
                  <div className="text-sm">Carteira de Membro</div>
                </div>
                
                {/* Card Body */}
                <div className="p-4 flex">
                  {/* Photo */}
                  <div className="w-1/3 pr-4">
                    <div className="w-full aspect-square bg-gray-100 rounded-md overflow-hidden border border-gray-300">
                      {member.photo_url ? (
                        <img 
                          src={member.photo_url} 
                          alt={member.full_name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <span className="text-gray-500 text-xs">Sem foto</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="w-2/3">
                    <h4 className="font-bold text-lg mb-2">{member.full_name}</h4>
                    
                    <div className="space-y-1 text-sm">
                      <div className="grid grid-cols-3">
                        <span className="text-gray-600 font-medium">Membro desde:</span>
                        <span className="col-span-2">{formatDate(member.membership_date)}</span>
                      </div>
                      
                      {member.birth_date && (
                        <div className="grid grid-cols-3">
                          <span className="text-gray-600 font-medium">Nascimento:</span>
                          <span className="col-span-2">{formatDate(member.birth_date)}</span>
                        </div>
                      )}
                      
                      {member.baptism_date && (
                        <div className="grid grid-cols-3">
                          <span className="text-gray-600 font-medium">Batismo:</span>
                          <span className="col-span-2">{formatDate(member.baptism_date)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="bg-gray-50 p-3 text-center text-xs border-t border-gray-200">
                  <p>ID: {member.id.substring(0, 8)}</p>
                  <p className="mt-1">Esta carteirinha é de uso pessoal e intransferível</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                <Download size={18} className="mr-2" />
                Baixar PDF
              </button>
              
              <button
                onClick={handlePrint}
                className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                <Printer size={18} className="mr-2" />
                Imprimir
              </button>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Informações Importantes</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Esta carteirinha é digital e pode ser apresentada em seu dispositivo móvel</li>
                <li>Você também pode imprimir ou salvar como PDF para uso offline</li>
                <li>Em caso de perda ou alteração de dados, você pode gerar uma nova carteirinha a qualquer momento</li>
                <li>Para atualizar suas informações, acesse a página de cadastro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCardPage;