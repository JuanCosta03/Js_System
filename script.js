// script.js - Interatividade do Site JCSystem

document.addEventListener('DOMContentLoaded', function() {
    console.log('JCSystem - Site carregado! 🚀');
    
    // Menu responsivo
    initMenu();
    
    // Sistema de tabs
    initTabs();
    
    // Modal de login
    initLoginModal();
    
    // Formulários
    initForms();
    
    // Chat widget
    initChatWidget();
    
    // Sistema de seleção
    initSystemSelection();
    
    // Animações
    initAnimations();
});

// Menu responsivo
function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            this.innerHTML = navMenu.classList.contains('show') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    }
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            if (menuToggle) {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Sistema de tabs
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Remove classe active de todos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Adiciona ao clicado
            this.classList.add('active');
            const tabPane = document.getElementById(tabId);
            if (tabPane) {
                tabPane.classList.add('active');
            }
        });
    });
}

// Modal de login
function initLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const loginButtons = document.querySelectorAll('#openLogin, .open-login');
    const closeModal = document.querySelector('.close-modal');
    
    // Abrir modal
    loginButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginModal) {
                loginModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Fechar modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (loginModal) {
                loginModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Fechar ao clicar fora
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Tecla ESC para fechar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loginModal && loginModal.style.display === 'block') {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Sistema de seleção
function initSystemSelection() {
    const systemOptions = document.querySelectorAll('.system-option:not([disabled])');
    
    systemOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active de todas
            systemOptions.forEach(opt => opt.classList.remove('active'));
            
            // Adiciona active à clicada
            this.classList.add('active');
        });
    });
}

// Formulários
function initForms() {
    // Formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            
            if (!email || !password) {
                showAlert('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            // Simulação de login
            showAlert('Login realizado com sucesso! Redirecionando...', 'success');
            
            setTimeout(() => {
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                // Aqui você redirecionaria para o sistema real
                // window.location.href = 'sistema/dashboard.html';
            }, 1500);
        });
        
        // Mostrar/ocultar senha
        const showPasswordBtn = loginForm.querySelector('.show-password');
        if (showPasswordBtn) {
            showPasswordBtn.addEventListener('click', function() {
                const passwordInput = loginForm.querySelector('#password');
                const icon = this.querySelector('i');
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.classList.replace('fa-eye', 'fa-eye-slash');
                } else {
                    passwordInput.type = 'password';
                    icon.classList.replace('fa-eye-slash', 'fa-eye');
                }
            });
        }
    }
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#contactName').value;
            const email = this.querySelector('#contactEmail').value;
            const message = this.querySelector('#contactMessage').value;
            
            if (!name || !email || !message) {
                showAlert('Por favor, preencha os campos obrigatórios.', 'error');
                return;
            }
            
            // Simulação de envio
            showAlert('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            this.reset();
            
            console.log('Formulário de contato enviado:', { name, email, message });
        });
    }
    
    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showAlert('Obrigado por se inscrever na nossa newsletter!', 'success');
                this.reset();
            }
        });
    }
}

// Chat widget
function initChatWidget() {
    const chatWidget = document.getElementById('chatWidget');
    const openChatBtn = document.getElementById('openChat');
    const closeChatBtn = chatWidget?.querySelector('.chat-close');
    
    if (openChatBtn && chatWidget) {
        openChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            chatWidget.classList.add('open');
        });
    }
    
    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', function() {
            chatWidget.classList.remove('open');
        });
    }
    
    // Envio de mensagem no chat
    const chatInput = chatWidget?.querySelector('.chat-input input');
    const chatSendBtn = chatWidget?.querySelector('.chat-input button');
    
    if (chatSendBtn && chatInput) {
        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                addChatMessage(message, 'user');
                chatInput.value = '';
                
                // Resposta automática
                setTimeout(() => {
                    const responses = [
                        "Olá! Como posso ajudá-lo hoje?",
                        "Gostaria de saber mais sobre algum sistema específico?",
                        "Posso agendar uma demonstração para você!",
                        "Tem alguma dúvida sobre preços ou funcionalidades?"
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    addChatMessage(randomResponse, 'bot');
                }, 1000);
            }
        };
        
        chatSendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function addChatMessage(message, sender) {
    const chatBody = document.querySelector('.chat-body');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}`;
    messageElement.innerHTML = `
        <div class="message-content">${message}</div>
        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    `;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Animações
function initAnimations() {
    // Animar elementos ao rolar
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.solution-card, .feature-detail, .contact-method');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animated');
            }
        });
    };
    
    // Adicionar estilos para animação
    const style = document.createElement('style');
    style.textContent = `
        .solution-card, .feature-detail, .contact-method {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .solution-card.animated, 
        .feature-detail.animated, 
        .contact-method.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .alert {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 9999;
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            min-width: 300px;
            max-width: 400px;
            transform: translateX(150%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .alert.show {
            transform: translateX(0);
        }
        
        .alert-success {
            border-left: 4px solid #00C853;
        }
        
        .alert-error {
            border-left: 4px solid #FF1744;
        }
        
        .alert-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }
        
        .alert-content i {
            font-size: 20px;
        }
        
        .alert-success .alert-content i {
            color: #00C853;
        }
        
        .alert-error .alert-content i {
            color: #FF1744;
        }
        
        .alert-close {
            background: none;
            border: none;
            font-size: 24px;
            color: #86868B;
            cursor: pointer;
            padding: 4px;
            line-height: 1;
        }
        
        .chat-message {
            margin-bottom: 16px;
            max-width: 80%;
        }
        
        .chat-message.user {
            margin-left: auto;
        }
        
        .chat-message.bot {
            margin-right: auto;
        }
        
        .message-content {
            padding: 12px 16px;
            border-radius: 18px;
            font-size: 14px;
            line-height: 1.4;
        }
        
        .chat-message.user .message-content {
            background: #0000FF;
            color: white;
            border-bottom-right-radius: 4px;
        }
        
        .chat-message.bot .message-content {
            background: #F5F5F7;
            color: #1D1D1F;
            border-bottom-left-radius: 4px;
        }
        
        .message-time {
            font-size: 11px;
            color: #86868B;
            margin-top: 4px;
            text-align: right;
        }
        
        .chat-message.bot .message-time {
            text-align: left;
        }
        
        .nav-menu.show {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(style);
    
    // Disparar animações
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
}

// Sistema de alertas
function showAlert(message, type = 'info') {
    // Remove alertas anteriores
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Cria novo alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="alert-close">&times;</button>
    `;
    
    document.body.appendChild(alert);
    
    // Animação de entrada
    setTimeout(() => alert.classList.add('show'), 10);
    
    // Fechar alerta
    const closeBtn = alert.querySelector('.alert-close');
    closeBtn.addEventListener('click', () => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
    });
    
    // Auto-fechar após 5 segundos
    setTimeout(() => {
        if (alert.parentNode) {
            alert.classList.remove('show');
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});