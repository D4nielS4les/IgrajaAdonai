import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Church, Menu, X, User, LogOut } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Igreja Adonai Logo" className="w-7 h-7" />
            <span className="text-xl font-bold">Igreja Evangélica Assembléia de Deus Adonai</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Início</Link>
            <Link to="/sobre" className="hover:text-blue-200 transition-colors">Sobre Nós</Link>
            
            {user ? (
              <>
                <Link to="/cadastro" className="hover:text-blue-200 transition-colors">Cadastro</Link>
                <Link to="/carteirinha" className="hover:text-blue-200 transition-colors">Carteirinha</Link>
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                    <User size={20} />
                    <span>Perfil</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link 
                      to="/perfil" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Meu Perfil
                    </Link>
                    <button 
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <LogOut size={16} />
                        <span>Sair</span>
                      </div>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
              >
                Entrar
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className="hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/cadastro" 
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cadastro
                </Link>
                <Link 
                  to="/carteirinha" 
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carteirinha
                </Link>
                <Link 
                  to="/perfil" 
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meu Perfil
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-left hover:text-blue-200 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Sair</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;