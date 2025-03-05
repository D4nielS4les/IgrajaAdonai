//import React from 'react';
import { BookOpen, Users, Heart, Target, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-20 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1501176687610-a3bf0e7ffe5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a história, visão e valores da Igreja Evangélica Adonai
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                Em 2001, Deus colocou, no coração do Pr. Graciano, o chamado para iniciar esta Igreja e, mais tarde Ele o confirmou, fazendo sua esposa, Eliene, entender este chamado. Àquela época, o Pr. Graciano estava como vice-presidente da Assembléia de Deus Ministério Ágape do Conjunto Ceará, mas ele creu que o chamado haveria de se cumprir no tempo de Deus.
              </p>
              <p className="text-gray-700 mb-4">
                Esse tempo foi o ano de 2002. Então, tendo renunciado ao cargo que ocupava, o Pr. Graciano, juntamente com o Ev. Jean Carlos, comunicaram o fato ao Presidente da igreja, Pr. Francisco de Assis Gomes, e solicitaram desligamento do rol de membros daquela Igreja, com suas respectivas famílias
              </p>
              <p className="text-gray-700">
                Assim, aos 28/04/2002, na então residência do casal Graciano e Eliene Dias, situada na Rua 339 nº 87, na 2ª Etapa do Conjunto Ceará, por volta de 18h50min, foi realizado um culto de adoração a Deus, o qual se encerrou às 19h50min. Nascia ali uma nova igreja. Estavam reunidos naquela noite 11 pessoas adultas, dois adolescentes e quatro crianças. A Igreja começou, portanto, com 17 pessoas.
              </p>
              <p>
                Após o culto, foi realizada uma reunião administrativa, na qual foram discutidos e aprovados alguns pontos sobre a Igreja que se estava formando: (1) a doutrina seria assembleiana, com&nbsp;a administração&nbsp;congregacional; (2) a Igreja seria filiada à Convenção Fraternal de Ministros das Assembléias de Deus do Estado do Ceará – CONFRADECE, mediante a concordância do Pr. Osires Teixeira Pessoa, o Presidente daquela Convenção; (3) a principal estratégia de evangelização seria a realização de reuniões semanais nas famílias, para as quais amigos e vizinhos seriam convidados para ouvir a Palavra de Deus; e (4) a igreja seria chamada de ASSEMBLÉIA DE DEUS ADONAI.
              </p>
              <p>
                De lá para cá, temos contabilizado muitas bênçãos de Deus. O Senhor tem feito a Sua obra prosperar, tanto numérica como espiritualmente. Hoje, quase dez anos depois, somos uma comunidade de aproximadamente 100 pessoas, entre adultos e crianças. Nesse período, vários irmãos e irmãs transferiram-se para outras Igrejas, Municípios e até Estados.
              </p>
              <p>
                Materialmente, também, a bênção divina tem estado presente. O terreno (com o antigo imóvel fincado na Av. G, nº 253), ainda que tivesse sido oferecido à venda por muito tempo, foi guardado por Deus para esta Igreja. Em 16/06/2003, quando foi adquirido pela Assembléia de Deus Adonai, nem a igreja tinha o dinheiro para pagá-lo, nem a documentação de transferência podia ser feita, pois a propriedade era de herdeiros. O processo de liberação da partilha e conseqüente transferência para a&nbsp;Igreja só findaram dois anos depois, coincidindo com a época em que se completou o dinheiro para o pagamento. Em tudo isso vimos a providência de Deus.
              </p>
              <p>
                Após a aquisição, em junho/2003, passamos a realizar escolas dominicais no antigo imóvel que existia neste local, embora os demais cultos e reuniões continuassem sendo realizados na Rua 339.
              </p>
              <p>
                No início de agosto/2006, o imóvel antigo foi demolido, e, em 19/08/2006, às 19h, realizamos o culto de lançamento da pedra fundamental deste templo, com a presença de grande parte dos integrantes da Igreja e de vários irmãos visitantes, pertencentes a Igrejas co-irmãs. Havia muita expectativa naquela noite quanto ao que Deus iria fazer por nós a partir dali.
              </p>
              <p>
                Três dias depois, em 22/08/2006, deu-se início a construção do templo. Deus providenciou cada detalhe, concedeu recursos aos irmãos e irmãs desta Igreja e estes contribuem com amor, de modo que os recursos gastos até hoje foram provenientes de dízimos, ofertas e doações voluntárias dos servos de Deus.
              </p>
              <p>
                Louvamos a Ele por ter sempre guardado de acidentes graves os que trabalharam na construção do templo. Somos gratos por todo o empenho com que os irmãos e irmãs não só contribuem com seus recursos, mas também com suas orações.
              </p>
              <p>
                Exatamente quatro anos depois do lançamento da pedra fundamental, em 19/08/2010, o templo foi inaugurado com um animado culto de adoração a Deus.
              </p>
              <p>
                Atualmente, estamos providenciando a filiação de um trabalho no interior, em Quixadá, e nos empenhando em oração para que Deus prepare obreiros para abrirmos congregações em locais onde a pregação do evangelho ainda seja escassa.
              </p>
              <p>
                Deus seja louvado por tudo que tem feito e continuará fazendo!
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600133153574-25d98a99528c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Igreja Evangélica Adonai"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Missão, Visão e Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que norteiam nossa caminhada como igreja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Missão</h3>
              <p className="text-gray-700">
                Glorificar a Deus através da adoração, do discipulado e do serviço, levando as pessoas a um relacionamento pessoal com Jesus Cristo e equipando-as para cumprir o propósito de Deus em suas vidas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser uma igreja que reflete o caráter de Cristo, transformando vidas e comunidades através do poder do Evangelho, formando discípulos comprometidos com o Reino de Deus.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Fidelidade à Palavra de Deus</li>
                <li>• Excelência na adoração</li>
                <li>• Compromisso com o discipulado</li>
                <li>• Comunhão e relacionamentos</li>
                <li>• Serviço e compaixão</li>
                <li>• Evangelismo e missões</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossa Liderança</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os pastores e líderes que servem em nossa igreja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"

                alt="Pastor Sênior"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Pr. José Graciano Dias</h3>
              <p className="text-blue-900 mb-2">Pastor Presidente</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Servindo como pastor há mais de 20 anos, com formação teológica e paixão pelo ensino da Palavra.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Pastora"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Pra. Eliene Meneses Dias</h3>
              <p className="text-blue-900 mb-2">Pastora de Família</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Dedicada ao ministério de famílias e aconselhamento, com formação em psicologia.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Pastor de Jovens"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Irmão Lucas Dias</h3>
              <p className="text-blue-900 mb-2">Lider de Jovens</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Lidera o ministério de jovens com energia e visão, conectando a nova geração com a fé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossos Ministérios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Áreas de atuação e serviço em nossa igreja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-blue-900 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Ministério de Famílias</h3>
              <p className="text-gray-700">
                Apoio, aconselhamento e atividades para fortalecer os laços familiares e promover relacionamentos saudáveis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-blue-900 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Ministério de Jovens</h3>
              <p className="text-gray-700">
                Encontros semanais, retiros e atividades voltadas para o crescimento espiritual e comunhão entre os jovens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-blue-900 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Ministério Infantil</h3>
              <p className="text-gray-700">
                Educação cristã para crianças de todas as idades, com atividades lúdicas e ensino bíblico adaptado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="text-blue-900 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Ação Social</h3>
              <p className="text-gray-700">
                Projetos de assistência à comunidade, incluindo distribuição de alimentos, roupas e apoio a famílias carentes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="text-blue-900 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Discipulado</h3>
              <p className="text-gray-700">
                Grupos pequenos de estudo bíblico e mentoria para crescimento espiritual e formação de líderes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-blue-900 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Louvor e Adoração</h3>
              <p className="text-gray-700">
                Equipe dedicada à condução dos momentos de louvor nos cultos e eventos especiais da igreja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Service Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Localização e Horários</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Endereço</h3>
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="flex-shrink-0 mt-1 text-blue-900" />
                  <p className="text-gray-700">
                    Av. Principal, 1234, Centro<br />
                    Cidade - Estado, 12345-678
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Horários de Culto</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Clock size={20} className="flex-shrink-0 mt-1 text-blue-900" />
                    <div>
                      <p className="font-medium">Culto de Domingo</p>
                      <p className="text-gray-700">10h e 18h</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock size={20} className="flex-shrink-0 mt-1 text-blue-900" />
                    <div>
                      <p className="font-medium">Estudo Bíblico</p>
                      <p className="text-gray-700">Quarta-feira às 19h30</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock size={20} className="flex-shrink-0 mt-1 text-blue-900" />
                    <div>
                      <p className="font-medium">Culto de Oração</p>
                      <p className="text-gray-700">Sexta-feira às 20h</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15924.705599122957!2d-38.61199!3d-3.771765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c883bfab0fb%3A0x5f678b37b6630aee!2sAv.%20G%2C%20253%20-%20Conj.%20Cear%C3%A1%20II%2C%20Fortaleza%20-%20CE%2C%2060533-651%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1741182655742!5m2!1spt-BR!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Igreja Evangélica Adonai"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;