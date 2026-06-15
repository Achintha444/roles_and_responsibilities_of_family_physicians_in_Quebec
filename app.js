// Quebec Family Physician Presentation Logic

// 1. Data Base Definitions

// Speaking scripts in French (A2 Level) optimized to target 5-7 minutes total
const slidesSpeech = [
  // Slide 1
  `Bonjour à tous et bienvenue à ma présentation. 
  Aujourd'hui, je vais parler d'un sujet très important pour la vie quotidienne : <b>les rôles et les responsabilités des médecins de famille au Québec</b>. 
  C'est un sujet intéressant pour comprendre le système de santé québécois, surtout pour nous, les nouveaux arrivants. 
  Je vais commencer par expliquer qui ils sont, puis nous verrons ce qu'ils font et comment en trouver un.`,

  // Slide 2
  `Tout d'abord, <b>qu'est-ce qu'un médecin de famille</b> ? 
  C'est un professionnel de la santé généraliste. Contrairement aux spécialistes, il soigne les patients de <b>tous les âges</b> : des bébés aux personnes âgées. 
  Sa grande particularité est qu'il fait un <b>suivi à long terme</b>. Il peut suivre la santé d'un patient et de sa famille pendant plusieurs années, voire toute une vie. 
  Au Québec, on dit qu'il est le <b>premier contact</b>, car c'est lui qu'on va voir en premier quand on a un problème de santé non urgent.`,

  // Slide 3
  `Quelles sont ses <b>principales responsabilités</b> au quotidien ? 
  Premièrement, il examine les patients pour comprendre de quoi ils souffrent. Deuxièmement, il <b>diagnostique les maladies</b>. 
  Si vous êtes malade, il peut <b>prescrire des médicaments</b> avec une ordonnance pour la pharmacie. Il donne aussi des conseils de santé et répond aux questions des patients pour les rassurer. 
  <i>Par exemple :</i> si vous avez une grosse fièvre, une infection ou une douleur à l'estomac, c'est le médecin de famille que vous allez consulter.`,

  // Slide 4
  `En plus de soigner, le médecin de famille joue un rôle clé dans <b>la prévention et le suivi médical</b>. 
  Il n'attend pas que vous soyez malade pour agir. Il administre les <b>vaccins</b> et fait des examens de routine, comme des prises de sang ou des bilans de santé annuels. 
  Il donne aussi des conseils de vie saine : il conseille une alimentation équilibrée et encourage l'activité physique. Enfin, il assure le suivi des <b>maladies chroniques</b> comme le diabète ou l'hypertension pour éviter les complications. La prévention permet d'éviter des maladies graves dans le futur.`,

  // Slide 5
  `Parfois, un problème médical est trop spécifique. Le médecin de famille doit alors <b>référer le patient à un spécialiste</b>. 
  Il prépare une lettre de référence pour orienter le patient. Par exemple, il peut vous envoyer vers : 
  - Un <b>cardiologue</b> si vous avez un problème au cœur.
  - Un <b>dermatologue</b> pour les maladies de la peau.
  - Un <b>psychiatre</b> pour les troubles de la santé mentale.
  - Ou un <b>orthopédiste</b> pour les os et les articulations.
  Même si vous voyez un spécialiste, votre médecin de famille <b>coordonne tous vos soins</b> et reçoit les rapports médicaux.`,

  // Slide 6
  `Une question fréquente : <b>comment trouver un médecin de famille au Québec</b> ? 
  Actuellement, c'est un grand défi car beaucoup de personnes n'ont pas de médecin de famille attitré. 
  La méthode officielle est de s'inscrire sur une liste d'attente du gouvernement appelée le <b>Guichet d'accès à un médecin de famille (GAMF)</b>. 
  On peut aussi chercher soi-même une clinique qui accepte de nouveaux patients. En attendant d'avoir un médecin attitré, on peut utiliser les <b>cliniques sans rendez-vous</b> ou appeler le service Info-Santé 811. 
  Quand je suis arrivé au Québec, j'ai appris qu'il pouvait être difficile de trouver un médecin de famille et que l'attente peut être longue.`,

  // Slide 7
  `Quand vous avez besoin de voir un médecin, <b>comment prendre un rendez-vous</b> ? 
  Aujourd'hui, il y a trois façons : on peut téléphoner à la clinique, s'inscrire sur internet via des sites comme <b>Clic Santé</b> ou Bonjour-Santé, ou aller directement à la clinique pour les urgences. 
  Avant le rendez-vous, il y a des règles simples à respecter : il faut absolument apporter sa <b>carte d'assurance maladie</b> (la carte Soleil), préparer à l'avance une liste de questions en français pour ne rien oublier, et arriver bien à l'heure.`,

  // Slide 8
  `Mais <b>pourquoi les médecins de famille sont-ils si importants</b> pour la société ? 
  D'abord, ils offrent des soins médicaux de base de qualité. Ensuite, ils connaissent votre <b>historique médical</b> personnel, ce qui rend le traitement plus rapide et plus efficace. 
  En faisant de la prévention, ils évitent l'engorgement des urgences dans les hôpitaux. Bref, ils guident les patients dans le système de santé et contribuent à la santé et au bien-être de toute la population du Québec.`,

  // Slide 9
  `En conclusion, <b>les médecins de famille jouent un rôle essentiel au Québec</b>. Ils soignent, conseillent et accompagnent les patients dans les moments faciles comme difficiles. Ils sont indispensables pour notre qualité de vie. 
  Je pense qu'il est important de soutenir notre système de santé pour que tout le monde puisse avoir accès à un médecin rapidement. 
  Je vous remercie beaucoup pour votre attention et votre écoute. 
  Maintenant, avez-vous des questions ou des commentaires ?`
];

// Vocabulary dictionary with translation and phonetic helper
const vocabDatabase = [
  { term: "médecin de famille", translation: "family physician", def: "A doctor who provides general medical care for people of all ages in a community.", example: "Mon médecin de famille suit ma santé depuis dix ans." },
  { term: "soigner", translation: "to treat / cure", def: "To provide medical care to a sick person.", example: "Le médecin soigne les patients de tous les âges." },
  { term: "suivi médical", translation: "medical follow-up", def: "Continuous monitoring of a patient's health over time.", example: "Un bon suivi médical est nécessaire pour le diabète." },
  { term: "premier contact", translation: "first contact", def: "The initial point of entry into the healthcare system.", example: "Le médecin de famille est souvent le premier contact du patient." },
  { term: "diagnostiquer", translation: "to diagnose", def: "To identify the nature of an illness by examination of the symptoms.", example: "Il peut diagnostiquer des maladies courantes." },
  { term: "prescrire", translation: "to prescribe", def: "To advise and authorize the use of a medicine or treatment.", example: "Le médecin va me prescrire un antibiotique." },
  { term: "une ordonnance", translation: "a prescription", def: "A written paper from a doctor authorizing a pharmacist to dispense medicine.", example: "Je dois donner l'ordonnance au pharmacien." },
  { term: "prévention", translation: "prevention", def: "Action of stopping something from happening (in health, avoiding diseases).", example: "La prévention aide à éviter certaines maladies." },
  { term: "un vaccin", translation: "a vaccine", def: "A substance used to stimulate antibody production and provide immunity.", example: "Le médecin administre des vaccins aux enfants." },
  { term: "maladie chronique", translation: "chronic illness", def: "A health condition that lasts for a long time (e.g., diabetes, hypertension).", example: "Le diabète est une maladie chronique fréquente." },
  { term: "référer", translation: "to refer", def: "To direct a patient to a specialist doctor for specific treatment.", example: "Le généraliste m'a référé à un dermatologue." },
  { term: "un spécialiste", translation: "a specialist", def: "A doctor highly trained in a specific area of medicine (e.g., heart, bones).", example: "Le cardiologue est un médecin spécialiste." },
  { term: "liste d'attente", translation: "waiting list", def: "A list of people waiting for a doctor to be assigned to them.", example: "Je suis inscrit sur la liste d'attente du gouvernement." },
  { term: "sans rendez-vous", translation: "walk-in (without appointment)", def: "A clinic setup where patients can see a doctor without scheduling ahead.", example: "Je vais à la clinique sans rendez-vous ce matin." },
  { term: "carte d'assurance maladie", translation: "health insurance card (carte Soleil)", def: "The official health insurance card issued by the Quebec government (RAMQ).", example: "N'oubliez pas d'apporter votre carte d'assurance maladie." }
];

// Specialist definitions for Slide 5 interactive widget
const specialistData = {
  cardio: "<strong>Cardiologue :</strong> Spécialiste des maladies du cœur et des vaisseaux sanguins. On le consulte pour des douleurs thoraciques ou des palpitations.",
  derma: "<strong>Dermatologue :</strong> Spécialiste de la peau, des cheveux et des ongles. Il soigne l'eczéma, le psoriasis et vérifie les grains de beauté.",
  psy: "<strong>Psychiatre :</strong> Médecin spécialisé en santé mentale. Il peut diagnostiquer et traiter les troubles psychologiques et prescrire des médicaments.",
  ortho: "<strong>Orthopédiste :</strong> Spécialiste de l'appareil locomoteur. Il opère et soigne les fractures des os, les articulations et les muscles blessés."
};


// 2. DOM Elements Selection
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideNum = document.getElementById('slide-num');
const slideProgress = document.getElementById('slide-progress');
const speechContent = document.getElementById('speech-content');
const themeToggle = document.getElementById('theme-toggle');
const sidebarToggle = document.getElementById('sidebar-toggle');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const mainLayout = document.getElementById('main-layout');
const presenterSidebar = document.getElementById('presenter-sidebar');

// Timer elements
const timerDisplay = document.getElementById('timer-display');
const timerStartBtn = document.getElementById('timer-start');
const timerResetBtn = document.getElementById('timer-reset');

// Glossary elements
const vocabListContainer = document.getElementById('vocab-list');

// Flashcard elements
const cardWrapper = document.getElementById('flashcard-wrapper');
const cardFrontTerm = document.getElementById('card-front-term');
const cardBackTranslation = document.getElementById('card-back-translation');
const cardBackExample = document.getElementById('card-back-example');
const prevCardBtn = document.getElementById('prev-card-btn');
const nextCardBtn = document.getElementById('next-card-btn');
const cardIdxDisplay = document.getElementById('card-idx');


// 3. Application State variables
let currentSlideIndex = 0;
const totalSlides = slides.length;

let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;

let currentCardIndex = 0;


// 4. Slide Navigation logic
function updateSlides() {
  slides.forEach((slide, idx) => {
    if (idx === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  // Slide Counter
  slideNum.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;

  // Progress Bar Width
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
  slideProgress.style.width = `${progressPercent}%`;

  // Buttons Enable/Disable
  prevBtn.disabled = currentSlideIndex === 0;
  nextBtn.disabled = currentSlideIndex === totalSlides - 1;

  // Update Speech script for active slide
  updateSpeechScript();
}

function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    updateSlides();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlides();
  }
}

// Update Presenter Speech content
function updateSpeechScript() {
  speechContent.innerHTML = slidesSpeech[currentSlideIndex];
}


// 5. Presenter Sidebar Tabs logic
function switchTab(tabId) {
  // Deactivate all tabs
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

  // Find corresponding tab button
  let clickedBtn;
  if (tabId === 'script-tab') clickedBtn = document.querySelector('.tab-btn:nth-child(1)');
  else if (tabId === 'vocab-tab') clickedBtn = document.querySelector('.tab-btn:nth-child(2)');
  else if (tabId === 'flash-tab') clickedBtn = document.querySelector('.tab-btn:nth-child(3)');

  if (clickedBtn) clickedBtn.classList.add('active');
  
  const activePane = document.getElementById(tabId);
  if (activePane) activePane.classList.add('active');
}


// 6. Chronometer Timer logic
function toggleTimer() {
  if (isTimerRunning) {
    // Pause
    clearInterval(timerInterval);
    timerInterval = null;
    isTimerRunning = false;
    timerStartBtn.innerHTML = '<i data-lucide="play" style="width:16px; height:16px;"></i><span>Démarrer</span>';
    timerStartBtn.classList.remove('timer-running');
  } else {
    // Start
    isTimerRunning = true;
    timerStartBtn.innerHTML = '<i data-lucide="pause" style="width:16px; height:16px;"></i><span>Pause</span>';
    timerStartBtn.classList.add('timer-running');
    
    timerInterval = setInterval(() => {
      timerSeconds++;
      formatTime();
    }, 1000);
  }
  lucide.createIcons();
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  isTimerRunning = false;
  timerDisplay.textContent = '00:00';
  timerStartBtn.innerHTML = '<i data-lucide="play" style="width:16px; height:16px;"></i><span>Démarrer</span>';
  timerStartBtn.classList.remove('timer-running');
  lucide.createIcons();
}

function formatTime() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  
  const displayMins = mins < 10 ? '0' + mins : mins;
  const displaySecs = secs < 10 ? '0' + secs : secs;
  
  timerDisplay.textContent = `${displayMins}:${displaySecs}`;
}


// 7. Vocabulary TTS & Glossary Initialization
function initializeGlossary() {
  vocabListContainer.innerHTML = '';
  vocabDatabase.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `
      <div class="vocab-card-header">
        <span class="vocab-term">${item.term}</span>
        <button class="btn-pronounce" onclick="speakFrench('${item.term.replace(/'/g, "\\'")}')" title="Écouter la prononciation">
          <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div class="vocab-translation">${item.translation}</div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">${item.def}</div>
      <div class="vocab-example"><strong>Exemple :</strong> ${item.example}</div>
    `;
    vocabListContainer.appendChild(card);
  });
}

// Text to Speech logic (Web Speech API)
function speakFrench(text) {
  if ('speechSynthesis' in window) {
    // Stop any current voice speaking
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    
    // Select French voice if available
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find(voice => voice.lang.startsWith('fr'));
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }
    
    utterance.rate = 0.85; // Speak slightly slower for clarity
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Désolé, la synthèse vocale n'est pas supportée par votre navigateur.");
  }
}


// 8. Flashcards Game logic
function flipFlashcard() {
  cardWrapper.classList.toggle('flipped');
}

function showFlashcard() {
  const cardData = vocabDatabase[currentCardIndex];
  cardWrapper.classList.remove('flipped');
  
  // Wait a short time for flipping transition to complete before swapping content
  setTimeout(() => {
    cardFrontTerm.textContent = cardData.term;
    cardBackTranslation.textContent = cardData.translation;
    cardBackExample.innerHTML = `"${cardData.example}"`;
  }, 150);

  // Update Indicator
  cardIdxDisplay.textContent = `${currentCardIndex + 1} / ${vocabDatabase.length}`;
  
  // Button states
  prevCardBtn.disabled = currentCardIndex === 0;
  nextCardBtn.disabled = currentCardIndex === vocabDatabase.length - 1;
}

function nextCard() {
  if (currentCardIndex < vocabDatabase.length - 1) {
    currentCardIndex++;
    showFlashcard();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    showFlashcard();
  }
}


// 9. Interactive Slide Widgets
function showSpecialistInfo(specialistId) {
  // Update Buttons Active States
  document.querySelectorAll('.spec-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Highlight clicked button
  event.currentTarget.classList.add('active');

  // Update text box
  const detailBox = document.getElementById('spec-detail-box');
  detailBox.innerHTML = specialistData[specialistId];
}

function highlightWidgetStep(stepIndex) {
  const steps = document.querySelectorAll('.flow-step');
  steps.forEach((step, idx) => {
    if (idx === (stepIndex - 1)) {
      step.style.backgroundColor = 'var(--color-primary-light)';
      step.style.borderColor = 'var(--color-primary)';
    } else {
      step.style.backgroundColor = 'var(--bg-primary)';
      step.style.borderColor = 'var(--border-glass)';
    }
  });
}


// 10. Sidebar Toggle & Fullscreen Modes & Themes
function toggleSidebar() {
  mainLayout.classList.toggle('fullscreen-slides');
  presenterSidebar.style.display = mainLayout.classList.contains('fullscreen-slides') ? 'none' : 'flex';
}

function toggleFullscreen() {
  const viewport = document.getElementById('slide-viewport');
  if (!document.fullscreenElement) {
    viewport.requestFullscreen().catch(err => {
      alert(`Erreur en activant le plein écran: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Update Icon
  const themeIcon = themeToggle.querySelector('i');
  if (newTheme === 'dark') {
    themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    themeIcon.setAttribute('data-lucide', 'sun');
  }
  lucide.createIcons();
}


// 11. Initializer & Event Listeners setup
function init() {
  // Load Lucide Icons
  lucide.createIcons();

  // Populate dynamic views
  updateSlides();
  initializeGlossary();
  showFlashcard();

  // Navigation Button Click listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // Sidebar, Fullscreen and Theme listeners
  sidebarToggle.addEventListener('click', toggleSidebar);
  document.getElementById('toggle-presenter-view').addEventListener('click', toggleSidebar);
  fullscreenBtn.addEventListener('click', toggleFullscreen);
  themeToggle.addEventListener('click', toggleTheme);

  // Chronometer Event Listeners
  timerStartBtn.addEventListener('click', toggleTimer);
  timerResetBtn.addEventListener('click', resetTimer);

  // Flashcards Event Listeners
  prevCardBtn.addEventListener('click', prevCard);
  nextCardBtn.addEventListener('click', nextCard);

  // Voice list pre-load trigger (Chrome voice load delay fix)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

// Start Application on Load
window.addEventListener('DOMContentLoaded', init);
