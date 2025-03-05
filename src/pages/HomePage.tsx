//import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Heart } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://media.istockphoto.com/id/2161124245/pt/foto/christians-raising-their-hands-in-praise-and-worship-at-a-night-music-concert.jpg?s=2048x2048&w=is&k=20&c=7Ivup2H5hOsiOEKG2UaVWuUCqfhn0-z2Ap_SfNLuYyA=")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Igreja Evangélica Adonai
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles." - Mateus 18:20
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/sobre" 
              className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Conheça Nossa Igreja
            </Link>
            <Link 
              to="/cadastro" 
              className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Cadastre-se como Membro
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossos Cultos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Venha participar de nossos cultos e fortalecer sua fé através da palavra de Deus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Culto de Domingo</h3>
              <p className="text-gray-600 mb-4">Domingo às 17h EBD e 18:30h Culto da família</p>
              <p className="text-gray-700">
                Culto de celebração e adoração com pregação da palavra de Deus para toda a família.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Estudo Bíblico</h3>
              <p className="text-gray-600 mb-4">Quinta-feira às 19h30</p>
              <p className="text-gray-700">
                Momento de aprofundamento na palavra de Deus com estudos temáticos e devocionais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Culto de Oração</h3>
              <p className="text-gray-600 mb-4">Terça-feira às 07:30h</p>
              <p className="text-gray-700">
                Momento dedicado à intercessão e busca da presença de Deus através da oração.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa Comunidade</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Cadastre-se como membro e tenha acesso à sua carteirinha digital e todos os benefícios da nossa igreja.
          </p>
          <Link 
            to="/cadastro" 
            className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Cadastre-se Agora
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Testemunhos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja como Deus tem transformado vidas em nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Membro da igreja" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">Membro há 5 anos</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Encontrei na Igreja Adonai uma verdadeira família. O apoio espiritual e as amizades que fiz aqui transformaram minha vida completamente."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Membro da igreja" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <p className="text-gray-600 text-sm">Membro há 3 anos</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Os estudos bíblicos e a comunhão com os irmãos me ajudaram a crescer espiritualmente. Sou grato a Deus por ter me guiado até esta igreja."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Membro da igreja" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Ana Oliveira</h4>
                  <p className="text-gray-600 text-sm">Membro há 7 anos</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Minha família encontrou um lugar onde podemos crescer juntos na fé. Os ministérios para crianças e jovens são excelentes e nos ajudam a criar nossos filhos nos caminhos do Senhor."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Próximos Eventos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossa agenda de eventos e participe conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Conferência de Jovens" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-900 font-semibold mb-2">15-17 de Julho, 2025</div>
                <h3 className="text-xl font-bold mb-2">Conferência de Jovens</h3>
                <p className="text-gray-700 mb-4">
                  Um final de semana de louvor, pregação e comunhão para jovens de todas as idades.
                </p>
                <a href="#" className="text-blue-700 font-medium hover:underline">Saiba mais</a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Retiro Familiar" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-900 font-semibold mb-2">20-22 de Agosto, 2025</div>
                <h3 className="text-xl font-bold mb-2">Retiro Familiar</h3>
                <p className="text-gray-700 mb-4">
                  Um tempo especial para famílias se reconectarem com Deus e umas com as outras.
                </p>
                <a href="#" className="text-blue-700 font-medium hover:underline">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;