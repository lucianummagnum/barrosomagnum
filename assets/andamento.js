/* ============================================
   Ver Andamento Processual - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.getElementById('tooltip');
  const statesGrid = document.getElementById('statesGrid');
  const yearEl = document.getElementById('currentYear');
  
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Populate states list
  if (statesGrid && typeof trtLinks !== 'undefined') {
    const sortedCodes = Object.keys(trtLinks).sort(function(a, b) {
      return trtLinks[a].name.localeCompare(trtLinks[b].name);
    });

    sortedCodes.forEach(function(code) {
      const item = document.createElement('a');
      item.className = 'state-list-item';
      item.href = trtLinks[code].url;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';
      item.setAttribute('role', 'listitem');
      item.setAttribute('aria-label', 'Consultar processos em ' + trtLinks[code].name + ' - ' + trtLinks[code].trt);
      item.innerHTML = '<span class="state-name">' + trtLinks[code].name + ' (' + code + ')</span>' +
                        '<span class="state-trt">' + trtLinks[code].trt + '</span>' +
                        '<span class="state-arrow">&rarr;</span>';
      statesGrid.appendChild(item);
    });
  }

  // SVG Map interaction
  const states = document.querySelectorAll('.state');
  
  states.forEach(function(state) {
    // Click handler
    state.addEventListener('click', function() {
      var code = this.getAttribute('data-state') || this.id;
      if (code && trtLinks[code]) {
        window.open(trtLinks[code].url, '_blank', 'noopener,noreferrer');
      }
    });

    // Keyboard handler
    state.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });

    // Tooltip handlers
    state.addEventListener('mouseenter', function(e) {
      var code = this.getAttribute('data-state') || this.id;
      if (code && trtLinks[code]) {
        tooltip.textContent = 'Consultar processos no ' + trtLinks[code].trt + ' - ' + trtLinks[code].name;
        tooltip.style.opacity = '1';
        tooltip.setAttribute('aria-hidden', 'false');
      }
    });

    state.addEventListener('mousemove', function(e) {
      var mapWrapper = document.querySelector('.map-wrapper');
      var rect = mapWrapper.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      tooltip.style.left = x + 'px';
      tooltip.style.top = (y - 45) + 'px';
    });

    state.addEventListener('mouseleave', function() {
      tooltip.style.opacity = '0';
      tooltip.setAttribute('aria-hidden', 'true');
    });

    // Focus tooltip
    state.addEventListener('focus', function() {
      var code = this.getAttribute('data-state') || this.id;
      if (code && trtLinks[code]) {
        tooltip.textContent = 'Consultar processos no ' + trtLinks[code].trt + ' - ' + trtLinks[code].name;
        tooltip.style.opacity = '1';
        tooltip.style.left = '50%';
        tooltip.style.top = '10px';
        tooltip.setAttribute('aria-hidden', 'false');
      }
    });

    state.addEventListener('blur', function() {
      tooltip.style.opacity = '0';
      tooltip.setAttribute('aria-hidden', 'true');
    });
  });

  // Add state labels to SVG
  addStateLabels();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
    });
  }
});

function addStateLabels() {
  var svg = document.getElementById('brazilMap');
  if (!svg) return;

  var labelPositions = {
    'AM': [190, 170], 'PA': [390, 190], 'RR': [215, 45], 'AP': [385, 55],
    'AC': [80, 230], 'RO': [180, 275], 'MT': [305, 335], 'TO': [425, 295],
    'MA': [505, 165], 'PI': [520, 250], 'CE': [595, 175], 'RN': [670, 175],
    'PB': [670, 218], 'PE': [630, 250], 'AL': [682, 282], 'SE': [668, 312],
    'BA': [545, 355], 'GO': [415, 400], 'DF': [435, 395],
    'MG': [535, 480], 'ES': [645, 465], 'RJ': [605, 548],
    'SP': [460, 515], 'MS': [325, 455], 'PR': [425, 565],
    'SC': [435, 635], 'RS': [395, 690]
  };

  Object.keys(labelPositions).forEach(function(code) {
    var pos = labelPositions[code];
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', pos[0]);
    text.setAttribute('y', pos[1]);
    text.setAttribute('class', 'state-label');
    text.textContent = code;
    svg.appendChild(text);
  });
}
