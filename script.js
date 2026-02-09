/**
 * ================================
 * SPACEFLOW LOGIN - JAVASCRIPT
 * Sistema de Gestão de Espaços Educacionais
 * ================================
 * 
 * Funcionalidades:
 * - Validação local de formulário
 * - Autenticação simulada (offline)
 * - Efeitos parallax interativos
 * - Feedback visual ao usuário
 * - Acessibilidade (ARIA)
 */

// ================================
// CREDENCIAIS VÁLIDAS (SIMULAÇÃO)
// ================================
const VALID_CREDENTIALS = [
    {
        email: 'demo@spaceflow.com',
        password: 'demo123',
        name: 'Usuário Demo',
        role: 'Coordenador'
    },
    {
        email: 'admin@spaceflow.com',
        password: 'admin123',
        name: 'Administrador',
        role: 'Admin Root'
    },
    {
        email: 'professor@spaceflow.com',
        password: 'prof123',
        name: 'João Silva',
        role: 'Professor'
    }
];

// ================================
// ELEMENTOS DO DOM
// ================================
let elements = {};

function initElements() {
    elements = {
        form: document.getElementById('loginForm'),
        emailInput: document.getElementById('email'),
        passwordInput: document.getElementById('password'),
        emailSpinner: document.getElementById('emailSpinner'),
        emailCheck: document.getElementById('emailCheck'),
        emailError: document.getElementById('email-error'),
        passwordError: document.getElementById('password-error'),
        submitButton: document.getElementById('submitButton'),
        submitText: document.getElementById('submitText'),
        submitSpinner: document.getElementById('submitSpinner'),
        loginError: document.getElementById('loginError'),
        loginErrorText: document.getElementById('loginErrorText'),
        togglePassword: document.getElementById('togglePassword'),
        eyeIcon: document.getElementById('eyeIcon'),
        eyeSlashIcon: document.getElementById('eyeSlashIcon'),
        successModal: document.getElementById('successModal'),
        successModalContent: document.getElementById('successModalContent'),
        welcomeUserName: document.getElementById('welcomeUserName'),
        forgotPasswordModal: document.getElementById('forgotPasswordModal'),
        forgotPasswordModalContent: document.getElementById('forgotPasswordModalContent'),
        parallaxElements: document.querySelectorAll('.parallax-element'),
        glassmorphismCard: document.querySelector('.glassmorphism-card')
    };
}

// ================================
// INICIALIZAÇÃO
// ================================
document.addEventListener('DOMContentLoaded', function() {
    initElements();
    initFormValidation();
    initPasswordToggle();
    initParallaxEffects();
    initEmailDetection();
    initAccessibility();
    
    console.log('🚀 Spaceflow Login System initialized');
});

// ================================
// VALIDAÇÃO DO FORMULÁRIO
// ================================
function initFormValidation() {
    elements.form.addEventListener('submit', handleFormSubmit);
    
    // Validação em tempo real
    elements.emailInput.addEventListener('blur', validateEmail);
    elements.passwordInput.addEventListener('blur', validatePassword);
    
    // Remover erro ao digitar
    elements.emailInput.addEventListener('input', () => clearFieldError('email'));
    elements.passwordInput.addEventListener('input', () => clearFieldError('password'));
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Limpar erros anteriores
    hideLoginError();
    
    // Validar campos
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (!isEmailValid || !isPasswordValid) {
        shakeForm();
        return;
    }
    
    // Mostrar loading
    showSubmitLoading();
    
    // Simular delay de autenticação (UX realista)
    await delay(1500);
    
    // Verificar credenciais
    const email = elements.emailInput.value.trim().toLowerCase();
    const password = elements.passwordInput.value;
    
    const user = authenticateUser(email, password);
    
    if (user) {
        // Login bem-sucedido
        showSuccessModal(user);
    } else {
        // Login falhou
        hideSubmitLoading();
        showLoginError('Email ou senha incorretos. Verifique suas credenciais e tente novamente.');
        shakeForm();
    }
}

function validateEmail() {
    const email = elements.emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showFieldError('email', 'O campo email é obrigatório');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        showFieldError('email', 'Digite um email válido');
        return false;
    }
    
    clearFieldError('email');
    return true;
}

function validatePassword() {
    const password = elements.passwordInput.value;
    
    if (!password) {
        showFieldError('password', 'O campo senha é obrigatório');
        return false;
    }
    
    if (password.length < 4) {
        showFieldError('password', 'A senha deve ter pelo menos 4 caracteres');
        return false;
    }
    
    clearFieldError('password');
    return true;
}

function showFieldError(field, message) {
    const input = elements[`${field}Input`];
    const errorEl = elements[`${field}Error`];
    
    input.classList.add('error');
    input.classList.remove('success');
    input.setAttribute('aria-invalid', 'true');
    
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
}

function clearFieldError(field) {
    const input = elements[`${field}Input`];
    const errorEl = elements[`${field}Error`];
    
    input.classList.remove('error');
    input.setAttribute('aria-invalid', 'false');
    
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
}

function showLoginError(message) {
    elements.loginErrorText.textContent = message;
    elements.loginError.classList.remove('hidden');
    
    // Anunciar erro para screen readers
    elements.loginError.setAttribute('role', 'alert');
}

function hideLoginError() {
    elements.loginError.classList.add('hidden');
}

function shakeForm() {
    elements.glassmorphismCard.classList.add('shake');
    setTimeout(() => {
        elements.glassmorphismCard.classList.remove('shake');
    }, 500);
}

// ================================
// AUTENTICAÇÃO SIMULADA
// ================================
function authenticateUser(email, password) {
    return VALID_CREDENTIALS.find(
        cred => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password
    );
}

// ================================
// LOADING STATES
// ================================
function showSubmitLoading() {
    elements.submitButton.disabled = true;
    elements.submitText.textContent = 'Entrando...';
    elements.submitSpinner.classList.remove('hidden');
}

function hideSubmitLoading() {
    elements.submitButton.disabled = false;
    elements.submitText.textContent = 'Entrar';
    elements.submitSpinner.classList.add('hidden');
}

// ================================
// TOGGLE SENHA
// ================================
function initPasswordToggle() {
    elements.togglePassword.addEventListener('click', function() {
        const type = elements.passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        elements.passwordInput.setAttribute('type', type);
        
        elements.eyeIcon.classList.toggle('hidden');
        elements.eyeSlashIcon.classList.toggle('hidden');
        
        // Atualizar aria-label
        const label = type === 'password' ? 'Mostrar senha' : 'Ocultar senha';
        this.setAttribute('aria-label', label);
    });
}

// ================================
// DETECÇÃO DE EMAIL
// ================================
function initEmailDetection() {
    let debounceTimer;
    
    elements.emailInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        const email = this.value.trim();
        
        // Esconder ícone de check
        elements.emailCheck.classList.add('hidden');
        
        if (email.length > 3 && email.includes('@')) {
            debounceTimer = setTimeout(() => {
                detectUser(email);
            }, 800);
        }
    });
}

async function detectUser(email) {
    elements.emailSpinner.classList.remove('hidden');
    
    // Simular busca
    await delay(500);
    
    const user = VALID_CREDENTIALS.find(
        cred => cred.email.toLowerCase() === email.toLowerCase()
    );
    
    elements.emailSpinner.classList.add('hidden');
    
    if (user) {
        elements.emailCheck.classList.remove('hidden');
        elements.emailInput.classList.add('success');
    }
}

// ================================
// MODAIS
// ================================
function showSuccessModal(user) {
    elements.welcomeUserName.textContent = `Olá, ${user.name}!`;
    elements.successModal.classList.remove('hidden');
    elements.successModal.classList.add('flex');
    
    // Animar entrada
    setTimeout(() => {
        elements.successModalContent.classList.remove('scale-95', 'opacity-0');
        elements.successModalContent.classList.add('modal-active');
    }, 10);
    
    // Simular redirecionamento após 3 segundos
    setTimeout(() => {
        // Em um sistema real, redirecionaria para o dashboard
        // window.location.href = '/dashboard';
        
        // Para demonstração, apenas resetar o formulário
        closeSuccessModal();
        resetForm();
    }, 3000);
}

function closeSuccessModal() {
    elements.successModalContent.classList.add('scale-95', 'opacity-0');
    elements.successModalContent.classList.remove('modal-active');
    
    setTimeout(() => {
        elements.successModal.classList.add('hidden');
        elements.successModal.classList.remove('flex');
    }, 300);
}

function showForgotPasswordModal() {
    elements.forgotPasswordModal.classList.remove('hidden');
    elements.forgotPasswordModal.classList.add('flex');
    
    setTimeout(() => {
        elements.forgotPasswordModalContent.classList.remove('scale-95', 'opacity-0');
        elements.forgotPasswordModalContent.classList.add('modal-active');
    }, 10);
}

function closeForgotPasswordModal() {
    elements.forgotPasswordModalContent.classList.add('scale-95', 'opacity-0');
    elements.forgotPasswordModalContent.classList.remove('modal-active');
    
    setTimeout(() => {
        elements.forgotPasswordModal.classList.add('hidden');
        elements.forgotPasswordModal.classList.remove('flex');
    }, 300);
}

// Expor funções para onclick nos elementos HTML
window.showForgotPasswordModal = showForgotPasswordModal;
window.closeForgotPasswordModal = closeForgotPasswordModal;
window.closeSuccessModal = closeSuccessModal;

function resetForm() {
    elements.form.reset();
    hideSubmitLoading();
    hideLoginError();
    clearFieldError('email');
    clearFieldError('password');
    elements.emailCheck.classList.add('hidden');
    elements.emailInput.classList.remove('success');
}

// ================================
// EFEITOS PARALLAX
// ================================
function initParallaxEffects() {
    let mouseX = 0;
    let mouseY = 0;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let ticking = false;
    
    // Atualizar dimensões da janela
    function updateWindowSize() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }
    
    window.addEventListener('resize', updateWindowSize);
    
    // Função principal do parallax
    function handleParallax(e) {
        mouseX = (e.clientX / windowWidth) - 0.5;
        mouseY = (e.clientY / windowHeight) - 0.5;
        
        elements.parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed) || 0.02;
            const x = mouseX * windowWidth * speed;
            const y = mouseY * windowHeight * speed;
            
            element.style.setProperty('--parallax-x', `${x}px`);
            element.style.setProperty('--parallax-y', `${y}px`);
            element.style.setProperty('--parallax-scale', 1 + Math.abs(mouseX) * 0.05);
        });
    }
    
    // Otimização com throttle
    function updateParallax(e) {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleParallax(e);
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Event listener para parallax dos elementos
    document.addEventListener('mousemove', updateParallax);
    
    // Efeito 3D no card principal
    document.addEventListener('mousemove', function(e) {
        if (!ticking) {
            requestAnimationFrame(() => {
                const rect = elements.glassmorphismCard.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const angleX = (e.clientY - cardCenterY) / 30;
                const angleY = (cardCenterX - e.clientX) / 30;
                
                // Limitar ângulos para não ficar muito extremo
                const maxAngle = 10;
                const clampedAngleX = Math.max(-maxAngle, Math.min(maxAngle, angleX));
                const clampedAngleY = Math.max(-maxAngle, Math.min(maxAngle, angleY));
                
                elements.glassmorphismCard.style.transform = `
                    perspective(1000px) 
                    rotateX(${clampedAngleX}deg) 
                    rotateY(${clampedAngleY}deg) 
                    translateY(-5px)
                `;
                
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Reset quando o mouse sai
    document.addEventListener('mouseleave', function() {
        elements.glassmorphismCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        
        elements.parallaxElements.forEach(element => {
            element.style.setProperty('--parallax-x', '0px');
            element.style.setProperty('--parallax-y', '0px');
            element.style.setProperty('--parallax-scale', 1);
        });
    });
    
    // Animação inicial suave
    setTimeout(() => {
        elements.parallaxElements.forEach((element, index) => {
            element.style.setProperty('--parallax-x', '0px');
            element.style.setProperty('--parallax-y', '20px');
            element.style.setProperty('--parallax-scale', '0.8');
            element.style.opacity = '0';
            element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                element.style.setProperty('--parallax-y', '0px');
                element.style.setProperty('--parallax-scale', '1');
                element.style.opacity = '';
            }, index * 150);
        });
    }, 300);
    
    // Otimização para dispositivos móveis
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        elements.parallaxElements.forEach(element => {
            const currentSpeed = parseFloat(element.dataset.speed);
            element.dataset.speed = (currentSpeed * 0.3).toString();
        });
    }
}

// ================================
// ACESSIBILIDADE
// ================================
function initAccessibility() {
    // Permitir envio do form com Enter
    elements.form.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            elements.submitButton.click();
        }
    });
    
    // Fechar modais com Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (!elements.successModal.classList.contains('hidden')) {
                closeSuccessModal();
            }
            if (!elements.forgotPasswordModal.classList.contains('hidden')) {
                closeForgotPasswordModal();
            }
        }
    });
    
    // Focus trap nos modais
    elements.successModal.addEventListener('keydown', trapFocus);
    elements.forgotPasswordModal.addEventListener('keydown', trapFocus);
}

function trapFocus(e) {
    if (e.key !== 'Tab') return;
    
    const modal = e.currentTarget;
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
    }
}

// ================================
// UTILITÁRIOS
// ================================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
