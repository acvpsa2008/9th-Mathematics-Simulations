// Metadata database of Class 9 Math Simulations
const SIMULATIONS = [
  {
    id: "number-systems",
    chapter: 1,
    title: "Number Systems",
    filename: "1 Number_Systems_Interactive.html",
    category: "algebra",
    description: "Explore number sets from natural numbers to real numbers, find rational numbers, and locate irrational numbers on the number line.",
    topics: ["Number Sets", "Locating √x", "Decimal Expansions"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Number Line -->
        <line x1="15" y1="65" x2="185" y2="65" stroke="#94a3b8" stroke-width="2.5" />
        <!-- Arrows -->
        <polygon points="15,61 7,65 15,69" fill="#94a3b8" />
        <polygon points="185,61 193,65 185,69" fill="#94a3b8" />
        <!-- Ticks and labels -->
        <!-- 0 -->
        <line x1="100" y1="60" x2="100" y2="70" stroke="#94a3b8" stroke-width="2" />
        <text x="97" y="83" fill="rgba(255,255,255,0.6)" font-size="9">0</text>
        <!-- 1 -->
        <line x1="140" y1="60" x2="140" y2="70" stroke="#94a3b8" stroke-width="2" />
        <text x="137" y="83" fill="rgba(255,255,255,0.6)" font-size="9">1</text>
        <!-- -1 -->
        <line x1="60" y1="60" x2="60" y2="70" stroke="#94a3b8" stroke-width="2" />
        <text x="55" y="83" fill="rgba(255,255,255,0.6)" font-size="9">-1</text>
        
        <!-- Right triangle for locating root 2 -->
        <line x1="100" y1="65" x2="140" y2="65" stroke="#3b82f6" stroke-width="2" />
        <line x1="140" y1="65" x2="140" y2="25" stroke="#f472b6" stroke-width="2" />
        <line x1="100" y1="65" x2="140" y2="25" stroke="#10b981" stroke-width="2" />
        
        <!-- Arc showing projection of root 2 to number line -->
        <path d="M 140 25 A 56.5 56.5 0 0 1 156.5 65" fill="none" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3 3" />
        
        <!-- Point for root 2 -->
        <circle cx="156.5" cy="65" r="4.5" fill="#fb923c" />
        <text x="150" y="53" fill="#fb923c" font-size="9" font-weight="bold">√2</text>
        <text x="110" y="42" fill="#10b981" font-size="8">√2</text>
        <text x="144" y="47" fill="#f472b6" font-size="8">1</text>
      </svg>
    `
  },
  {
    id: "polynomials",
    chapter: 2,
    title: "Polynomials",
    filename: "2. Polynomials_Interactive.html",
    category: "algebra",
    description: "Explore polynomials, visual representation of zeroes, and algebraic identities.",
    topics: ["Zeroes of Polynomials", "Geometric Meanings", "Factorization"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f472b6" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.8"/>
          </linearGradient>
        </defs>
        <!-- Grid lines -->
        <line x1="10" y1="60" x2="190" y2="60" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
        <line x1="100" y1="10" x2="100" y2="110" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
        <!-- Polynomial Curve (y = 0.0005 * (x-100)*(x-40)*(x-160) + 60) -->
        <path d="M 20 110 Q 50 10, 80 40 T 130 90 T 180 10" fill="none" stroke="url(#polyGrad)" stroke-width="3" stroke-linecap="round" />
        <!-- Intercept points -->
        <circle cx="56" cy="60" r="4" fill="#fb923c" />
        <circle cx="106" cy="60" r="4" fill="#fb923c" />
        <circle cx="158" cy="60" r="4" fill="#fb923c" />
        <!-- Text equation snippet -->
        <text x="20" y="30" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">p(x) = ax³ + bx² + cx + d</text>
      </svg>
    `
  },
  {
    id: "coordinate-geometry",
    chapter: 3,
    title: "Coordinate Geometry",
    filename: "3 Coordinate_Geometry.html",
    category: "geometry",
    description: "Learn about the Cartesian plane, quadrants, plotting points (x, y), and coordinate axes.",
    topics: ["Cartesian Plane", "Quadrants", "Plotting Points (x, y)"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.8"/>
          </linearGradient>
        </defs>
        <!-- Axes with arrows -->
        <line x1="20" y1="60" x2="180" y2="60" stroke="#475569" stroke-width="2" />
        <line x1="100" y1="10" x2="100" y2="110" stroke="#475569" stroke-width="2" />
        <polygon points="180,56 188,60 180,64" fill="#475569" />
        <polygon points="96,20 100,12 104,20" fill="#475569" />
        <!-- Point P(3, 2) -->
        <line x1="140" y1="60" x2="140" y2="30" stroke="rgba(251, 146, 60, 0.4)" stroke-width="1.5" stroke-dasharray="3 3" />
        <line x1="100" y1="30" x2="140" y2="30" stroke="rgba(251, 146, 60, 0.4)" stroke-width="1.5" stroke-dasharray="3 3" />
        <circle cx="140" cy="30" r="5" fill="#fb923c" />
        <text x="148" y="28" fill="#fb923c" font-size="10" font-weight="bold">P(3, 2)</text>
        <!-- Axis labels -->
        <text x="180" y="75" fill="rgba(255,255,255,0.5)" font-size="10">X</text>
        <text x="85" y="20" fill="rgba(255,255,255,0.5)" font-size="10">Y</text>
      </svg>
    `
  },
  {
    id: "linear-equations",
    chapter: 4,
    title: "Linear Equations in Two Variables",
    filename: "4 Linear_Equations_in_Two_Variables.html",
    category: "algebra",
    description: "Understand equations of the form ax + by + c = 0, visual solutions, and graphing straight lines.",
    topics: ["ax + by + c = 0", "Graphing Lines", "Infinite Solutions"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <line x1="15" y1="60" x2="185" y2="60" stroke="#334155" stroke-width="1.5" />
        <line x1="100" y1="15" x2="100" y2="105" stroke="#334155" stroke-width="1.5" />
        <!-- Graph of y = -0.5x + 3 -->
        <line x1="30" y1="20" x2="170" y2="100" stroke="#f472b6" stroke-width="3" stroke-linecap="round" />
        <!-- Graph of y = x - 1 -->
        <line x1="40" y1="100" x2="160" y2="20" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2 2" />
        <circle cx="113" cy="51" r="5.5" fill="#10b981" />
        <text x="123" y="48" fill="#10b981" font-size="9" font-family="monospace" font-weight="bold">Intersection</text>
      </svg>
    `
  },
  {
    id: "euclids-geometry",
    chapter: 5,
    title: "Introduction to Euclid's Geometry",
    filename: "5 Introduction_to_Euclids_Geometry.html",
    category: "geometry",
    description: "Explore Euclid's axioms, postulates, and the logical framework of geometry.",
    topics: ["Axioms & Postulates", "Euclid's 5th Postulate", "Geometric Definitions"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Postulate 1: Straight line from any point to any point -->
        <circle cx="40" cy="80" r="4" fill="#a855f7" />
        <text x="35" y="95" fill="rgba(255,255,255,0.4)" font-size="9">A</text>
        <circle cx="140" cy="40" r="4" fill="#a855f7" />
        <text x="138" y="32" fill="rgba(255,255,255,0.4)" font-size="9">B</text>
        <line x1="40" y1="80" x2="140" y2="40" stroke="#a855f7" stroke-width="2" />
        <!-- Postulate 3: Circle with center and radius -->
        <circle cx="140" cy="40" r="28" fill="none" stroke="rgba(96, 165, 250, 0.4)" stroke-width="1.5" stroke-dasharray="3 3" />
        <line x1="140" y1="40" x2="168" y2="40" stroke="#3b82f6" stroke-width="1.5" />
        <text x="148" y="52" fill="#3b82f6" font-size="8">r</text>
      </svg>
    `
  },
  {
    id: "lines-angles",
    chapter: 6,
    title: "Lines and Angles",
    filename: "6 Lines_and_Angles.html",
    category: "geometry",
    description: "Visualize complementary, supplementary, vertically opposite, and transversal angles in parallel lines.",
    topics: ["Parallel Lines", "Transversal", "Alternate & Corresponding Angles"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallel lines -->
        <line x1="25" y1="45" x2="175" y2="45" stroke="#94a3b8" stroke-width="2" />
        <line x1="25" y1="80" x2="175" y2="80" stroke="#94a3b8" stroke-width="2" />
        <!-- Transversal line -->
        <line x1="60" y1="20" x2="140" y2="105" stroke="#fb923c" stroke-width="2.5" />
        <!-- Angle indicators -->
        <path d="M 91 45 A 15 15 0 0 1 82 35" fill="none" stroke="#10b981" stroke-width="2" />
        <text x="73" y="32" fill="#10b981" font-size="10" font-weight="bold">θ</text>
        <path d="M 120 80 A 15 15 0 0 1 111 70" fill="none" stroke="#10b981" stroke-width="2" />
        <text x="102" y="67" fill="#10b981" font-size="10" font-weight="bold">θ</text>
      </svg>
    `
  },
  {
    id: "triangles",
    chapter: 7,
    title: "Triangles",
    filename: "7 Triangles.html",
    category: "geometry",
    description: "Demonstrate congruence criteria (SAS, ASA, SSS, RHS) and inequalities in triangles visually.",
    topics: ["Congruence Criteria", "SAS, ASA, SSS, RHS", "Inequalities in Triangles"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangle 1 -->
        <polygon points="25,90 75,30 95,90" fill="rgba(96, 165, 250, 0.15)" stroke="#3b82f6" stroke-width="2" />
        <!-- Congruent Triangle 2 -->
        <polygon points="115,90 165,30 185,90" fill="rgba(96, 165, 250, 0.15)" stroke="#3b82f6" stroke-width="2" />
        <!-- Equality markers (ticks) -->
        <line x1="47" y1="56" x2="53" y2="60" stroke="#fb923c" stroke-width="1.5" />
        <line x1="137" y1="56" x2="143" y2="60" stroke="#fb923c" stroke-width="1.5" />
        <line x1="55" y1="90" x2="55" y2="84" stroke="#10b981" stroke-width="1.5" />
        <line x1="145" y1="90" x2="145" y2="84" stroke="#10b981" stroke-width="1.5" />
        <text x="95" y="45" fill="#f8fafc" font-size="11" font-weight="bold">≅</text>
      </svg>
    `
  },
  {
    id: "quadrilaterals",
    chapter: 8,
    title: "Quadrilaterals",
    filename: "8 Quadrilaterals.html",
    category: "geometry",
    description: "Investigate angle sum properties, parallelograms, mid-point theorem, and other quadrilaterals.",
    topics: ["Angle Sum Property", "Parallelogram Conditions", "Mid-point Theorem"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogram -->
        <polygon points="35,85 70,35 170,35 135,85" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2" />
        <!-- Diagonals -->
        <line x1="35" y1="85" x2="170" y2="35" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="3 3" />
        <line x1="70" y1="35" x2="135" y2="85" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="3 3" />
        <!-- Intersection point -->
        <circle cx="102.5" cy="60" r="3" fill="#10b981" />
        <!-- Opposite sides arrows -->
        <path d="M 95 31 L 102 35 L 95 39" fill="none" stroke="#a855f7" stroke-width="1.5" />
        <path d="M 78 81 L 85 85 L 78 89" fill="none" stroke="#a855f7" stroke-width="1.5" />
      </svg>
    `
  },
  {
    id: "circles",
    chapter: 9,
    title: "Circles",
    filename: "9 Circles.html",
    category: "geometry",
    description: "Visualize segments, chords, perpendiculars from centers, and angles subtended by circular arcs.",
    topics: ["Subtended Angles", "Perpendicular Bisectors", "Cyclic Quadrilaterals"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Main Circle -->
        <circle cx="100" cy="60" r="45" fill="none" stroke="#3b82f6" stroke-width="2" />
        <circle cx="100" cy="60" r="3" fill="#3b82f6" />
        <!-- Chord AB -->
        <line x1="60" y1="82" x2="140" y2="82" stroke="#f472b6" stroke-width="2" />
        <text x="50" y="88" fill="#f472b6" font-size="9">A</text>
        <text x="144" y="88" fill="#f472b6" font-size="9">B</text>
        <!-- Center to chord perpendicular -->
        <line x1="100" y1="60" x2="100" y2="82" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2 2" />
        <!-- Right angle symbol -->
        <rect x="94" y="76" width="6" height="6" fill="none" stroke="#10b981" stroke-width="1" />
      </svg>
    `
  },
  {
    id: "herons-formula",
    chapter: 10,
    title: "Heron's Formula",
    filename: "10 Herons_Formula.html",
    category: "mensuration",
    description: "Calculate triangle areas dynamically when height is unknown, verifying Heron's formula step-by-step.",
    topics: ["Area of Triangles", "Semi-perimeter (s)", "Area = √(s(s-a)(s-b)(s-c))"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangle with sides -->
        <polygon points="35,90 90,30 165,90" fill="none" stroke="#fb923c" stroke-width="2" />
        <!-- Labels for sides -->
        <text x="52" y="55" fill="#f8fafc" font-size="10">a</text>
        <text x="132" y="55" fill="#f8fafc" font-size="10">b</text>
        <text x="97" y="103" fill="#f8fafc" font-size="10">c</text>
        <!-- Formula text preview -->
        <text x="25" y="20" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="8">Area = √s(s-a)(s-b)(s-c)</text>
      </svg>
    `
  },
  {
    id: "surface-areas-volumes",
    chapter: 11,
    title: "Surface Areas and Volumes",
    filename: "11 Surface_Areas_and_Volumes.html",
    category: "mensuration",
    description: "Explore 3D geometry of cubes, cylinders, cones, and spheres to compute surface areas and volumes.",
    topics: ["Cylinder, Cone & Sphere", "Total & Curved Surface Area", "Volume Formulations"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Cylinder 3D wireframe -->
        <ellipse cx="65" cy="35" rx="20" ry="6" fill="none" stroke="#fbbf24" stroke-width="1.5" />
        <ellipse cx="65" cy="85" rx="20" ry="6" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2 2" />
        <line x1="45" y1="35" x2="45" y2="85" stroke="#fbbf24" stroke-width="1.5" />
        <line x1="85" y1="35" x2="85" y2="85" stroke="#fbbf24" stroke-width="1.5" />
        <!-- Height indicator -->
        <line x1="93" y1="35" x2="93" y2="85" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="2 2" />
        <text x="96" y="63" fill="rgba(255,255,255,0.5)" font-size="8">h</text>
        <!-- Sphere wireframe -->
        <circle cx="145" cy="60" r="25" fill="none" stroke="#fb923c" stroke-width="1.5" />
        <ellipse cx="145" cy="60" rx="25" ry="7" fill="none" stroke="#fb923c" stroke-width="1" stroke-dasharray="3 2" />
        <line x1="145" y1="60" x2="170" y2="60" stroke="#10b981" stroke-width="1" />
        <text x="153" y="55" fill="#10b981" font-size="8">r</text>
      </svg>
    `
  },
  {
    id: "statistics",
    chapter: 12,
    title: "Statistics",
    filename: "12 Statistics.html",
    category: "statistics",
    description: "Represent data visually using bar charts, histograms, and frequency polygons.",
    topics: ["Bar Graphs & Histograms", "Frequency Polygons", "Data Interpretation"],
    svgIcon: `
      <svg class="math-icon" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="100" x2="180" y2="100" stroke="#475569" stroke-width="2" />
        <line x1="25" y1="20" x2="25" y2="100" stroke="#475569" stroke-width="1.5" />
        <!-- Bars -->
        <rect x="40" y="60" width="22" height="40" fill="#34d399" fill-opacity="0.85" rx="2" />
        <rect x="72" y="35" width="22" height="65" fill="#fb923c" fill-opacity="0.85" rx="2" />
        <rect x="104" y="50" width="22" height="50" fill="#60a5fa" fill-opacity="0.85" rx="2" />
        <rect x="136" y="25" width="22" height="75" fill="#a855f7" fill-opacity="0.85" rx="2" />
        <!-- Frequency polygon line -->
        <polyline points="51,60 83,35 115,50 147,25" fill="none" stroke="#f8fafc" stroke-width="2" />
        <circle cx="51" cy="60" r="3" fill="#f8fafc" />
        <circle cx="83" cy="35" r="3" fill="#f8fafc" />
        <circle cx="115" cy="50" r="3" fill="#f8fafc" />
        <circle cx="147" cy="25" r="3" fill="#f8fafc" />
      </svg>
    `
  }
];

// LocalStorage State Keys
const MASTERY_KEY = "class9_math_simulations_mastery";

// Initialize App State
let currentFilter = "all";
let searchQuery = "";
let masteredList = [];

// DOM Elements
let gridEl, searchInput, filterTabsContainer, progressRadialBar, progressPercentageText, progressSubText, overlayModal, overlayIframe, overlayTitleText, overlayChapterBadge, closeOverlayBtn, fullScreenBtn, newTabOverlayBtn;

document.addEventListener("DOMContentLoaded", () => {
  // Bind DOM elements
  gridEl = document.getElementById("sim-grid");
  searchInput = document.getElementById("search-input");
  filterTabsContainer = document.getElementById("filter-tabs");
  
  progressRadialBar = document.querySelector(".progress-radial .bar");
  progressPercentageText = document.querySelector(".progress-percentage");
  progressSubText = document.getElementById("progress-subtext");
  
  overlayModal = document.getElementById("simulation-overlay");
  overlayIframe = document.getElementById("overlay-iframe");
  overlayTitleText = document.getElementById("overlay-title-text");
  overlayChapterBadge = document.getElementById("overlay-chapter-badge");
  closeOverlayBtn = document.getElementById("close-overlay");
  fullScreenBtn = document.getElementById("fullscreen-overlay");
  newTabOverlayBtn = document.getElementById("newtab-overlay");

  // Load state from localStorage
  loadState();

  // Setup Event Listeners
  setupEventListeners();

  // Render dashboard
  render();
});

// Load state from local storage
function loadState() {
  try {
    const raw = localStorage.getItem(MASTERY_KEY);
    masteredList = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to load local storage state", e);
    masteredList = [];
  }
}

// Save state to local storage
function saveState() {
  try {
    localStorage.setItem(MASTERY_KEY, JSON.stringify(masteredList));
  } catch (e) {
    console.error("Failed to save state to local storage", e);
  }
}

// Setup all user interaction event listeners
function setupEventListeners() {
  // Search Input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    render();
  });

  // Filter Category Tabs
  const tabs = filterTabsContainer.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.dataset.filter;
      render();
    });
  });

  // In-App Overlay Actions
  closeOverlayBtn.addEventListener("click", closeSimulation);
  
  // Close overlay when clicking outside the modal container
  overlayModal.addEventListener("click", (e) => {
    if (e.target === overlayModal) {
      closeSimulation();
    }
  });

  // Handle Fullscreen of overlay container
  fullScreenBtn.addEventListener("click", () => {
    const container = overlayModal.querySelector(".overlay-container");
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error(`Error enabling full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Handle ESC key to exit overlay and other shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlayModal.classList.contains("active")) {
      closeSimulation();
    }
  });
}

// Checkbox mastery action
window.toggleMastery = function(simId) {
  const index = masteredList.indexOf(simId);
  if (index > -1) {
    masteredList.splice(index, 1);
  } else {
    masteredList.push(simId);
  }
  
  saveState();
  updateProgressUI();
  
  // Update card elements checked styling dynamically
  const cardLabel = document.getElementById(`label-${simId}`);
  if (cardLabel) {
    if (masteredList.includes(simId)) {
      cardLabel.classList.add("checked-label");
    } else {
      cardLabel.classList.remove("checked-label");
    }
  }
};

// Open Simulation in Overlay Modal
window.launchSimulation = function(simId) {
  const sim = SIMULATIONS.find(s => s.id === simId);
  if (!sim) return;

  // Set iframe source
  overlayIframe.src = sim.filename;
  overlayTitleText.textContent = sim.title;
  overlayChapterBadge.textContent = `Chapter ${sim.chapter}`;

  // Configure new tab button href
  newTabOverlayBtn.href = sim.filename;

  // Show overlay modal with animations
  overlayModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

// Close Overlay Simulation Modal
function closeSimulation() {
  overlayModal.classList.remove("active");
  // Clear src to stop audio/react loop inside the iframe
  overlayIframe.src = "about:blank";
  document.body.style.overflow = ""; // Enable scrolling
}

// Update the Top Panel Progress Rings & Details
function updateProgressUI() {
  const total = SIMULATIONS.length;
  const masteredCount = masteredList.filter(id => SIMULATIONS.some(s => s.id === id)).length;
  const percentage = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
  
  // Radial animation using stroke-dashoffset (201 max dashoffset)
  const offset = 201 - (201 * percentage) / 100;
  progressRadialBar.style.strokeDashoffset = offset;
  
  progressPercentageText.textContent = `${percentage}%`;
  progressSubText.textContent = `${masteredCount} of ${total} Simulations Mastered`;
}

// Render the grid cards based on filter and search
function render() {
  // Update progress dashboard stats first
  updateProgressUI();

  // Filter lists
  const filtered = SIMULATIONS.filter(sim => {
    // Check Category Filter
    const matchesCategory = currentFilter === "all" || sim.category === currentFilter;
    
    // Check Search Query
    const matchesSearch = sim.title.toLowerCase().includes(searchQuery) ||
                          sim.description.toLowerCase().includes(searchQuery) ||
                          `chapter ${sim.chapter}`.includes(searchQuery) ||
                          sim.topics.some(t => t.toLowerCase().includes(searchQuery));
                          
    return matchesCategory && matchesSearch;
  });

  // Render Grid Content
  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3>No Simulations Found</h3>
        <p>Try adjustments to your keywords or clear your category tags.</p>
      </div>
    `;
    return;
  }

  gridEl.innerHTML = filtered.map(sim => {
    const isMastered = masteredList.includes(sim.id);
    const topicsList = sim.topics.map(t => `<span class="badge text-xs" style="background: rgba(255,255,255,0.05); color: var(--text-secondary); border: 1px solid rgba(255,255,255,0.05); padding: 0.15rem 0.4rem; font-weight: 500;">${t}</span>`).join(" ");
    
    return `
      <div class="sim-card" style="animation: fadeInUp 0.4s ease-out forwards;">
        <div class="card-header-visual">
          ${sim.svgIcon}
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span class="chapter-badge">Ch ${sim.chapter}</span>
            <span class="category-tag tag-${sim.category}">${sim.category}</span>
          </div>
          <h2>${sim.title}</h2>
          <p>${sim.description}</p>
          
          <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 1.25rem;">
            ${topicsList}
          </div>

          <label class="mastery-checkbox ${isMastered ? 'checked-label' : ''}" id="label-${sim.id}">
            <input type="checkbox" ${isMastered ? 'checked' : ''} onclick="toggleMastery('${sim.id}')" />
            <div class="checkbox-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Mark as Mastered</span>
          </label>

          <div class="card-actions">
            <button class="btn btn-primary" onclick="launchSimulation('${sim.id}')">
              <svg style="width:16px;height:16px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Play
            </button>
            <a class="btn btn-secondary" href="${sim.filename}" target="_blank">
              <svg style="width:16px;height:16px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              New Tab
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}
