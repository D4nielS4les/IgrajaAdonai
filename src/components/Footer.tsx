//import React from 'react';
import { Link } from 'react-router-dom';
import { Church, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church size={24} />
              <h3 className="text-xl font-bold">Igreja Evangélica Assembléia de Deus Adonai</h3>
            </div>
            <p className="mb-4">
              Servindo a Deus e à comunidade com amor e dedicação desde 2002.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="hover:text-blue-300 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="hover:text-blue-300 transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="hover:text-blue-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300 transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-blue-300 transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/cadastro" className="hover:text-blue-300 transition-colors">Cadastro de Membros</Link>
              </li>
              <li>
                <Link to="/carteirinha" className="hover:text-blue-300 transition-colors">Carteirinha Digital</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Av. G, 253 - Conj. Ceará II<br />Fortaleza - CE, 60533-605</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span>(85) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:adonaiavgonline@gmail.com" className="hover:text-blue-300 transition-colors">
                adonaiavgonline@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Igreja Evangélica Adonai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;