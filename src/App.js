import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import CarrinhoModal from './components/CarrinhoModal';
import LoginModal from './components/LoginModal';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [session, setSession] = useState(null);
  const [mostrandoLogin, setMostrandoLogin] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [mostrandoCarrinho, setMostrandoCarrinho] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Erro ao fazer logout:', error);
    } else {
      alert('Logout realizado com sucesso!');
    }
  };

  // Restante da sua lógica de carrinho e produtos...
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 99.99 },
    { id: 2, nome: 'Produto 2', preco: 199.99 },
    { id: 3, nome: 'Produto 3', preco: 49.99 },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  const removerDoCarrinho = (indexDoItem) => {
    setCarrinho(carrinho.filter((_, index) => index !== indexDoItem));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kaiki Shop</h1>
        <div className="user-info">
          {session ? (
            <>
              <span>Bem-vindo, {session.user.email}</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </>
          ) : (
            <button onClick={() => setMostrandoLogin(true)} className="btn-login-header">Login</button>
          )}
          <button onClick={() => setMostrandoCarrinho(true)} className="btn-carrinho">Carrinho ({carrinho.length})</button>
        </div>
      </header>
      <main>
        <HeroSection />
        <ProductList produtos={produtos} onAdicionarAoCarrinho={adicionarAoCarrinho} />
      </main>
      {mostrandoLogin && <LoginModal onClose={() => setMostrandoLogin(false)} />}
      {mostrandoCarrinho && <CarrinhoModal carrinho={carrinho} onFechar={() => setMostrandoCarrinho(false)} onRemoverItem={removerDoCarrinho} />}
    </div>
  );
}

export default App;