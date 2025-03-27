document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Ohm's Law Calculator
    const calcType = document.getElementById('calc-type');
    const voltageGroup = document.getElementById('voltage-group');
    const currentGroup = document.getElementById('current-group');
    const resistanceGroup = document.getElementById('resistance-group');
    const voltageInput = document.getElementById('voltage');
    const currentInput = document.getElementById('current');
    const resistanceInput = document.getElementById('resistance');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    
    // Visualization elements
    const visVoltage = document.getElementById('vis-voltage');
    const visCurrent = document.getElementById('vis-current');
    const visResistance = document.getElementById('vis-resistance');
    
    // Update input fields based on calculation type
    function updateInputFields() {
        const selectedType = calcType.value;
        
        voltageGroup.style.display = selectedType === 'voltage' ? 'none' : 'block';
        currentGroup.style.display = selectedType === 'current' ? 'none' : 'block';
        resistanceGroup.style.display = selectedType === 'resistance' ? 'none' : 'block';
        
        // Clear inputs
        if (selectedType === 'voltage') voltageInput.value = '';
        if (selectedType === 'current') currentInput.value = '';
        if (selectedType === 'resistance') resistanceInput.value = '';
        
        // Clear result
        resultDiv.innerHTML = '<p>The result will appear here</p>';
        
        // Reset visualization
        updateVisualization(0, 0, 0);
    }
    
    // Calculate based on Ohm's Law
    function calculate() {
        const selectedType = calcType.value;
        let voltage, current, resistance, result;
        
        try {
            switch (selectedType) {
                case 'voltage':
                    current = parseFloat(currentInput.value);
                    resistance = parseFloat(resistanceInput.value);
                    
                    if (isNaN(current) || isNaN(resistance)) {
                        throw new Error('Please enter valid numbers for current and resistance.');
                    }
                    
                    if (current <= 0 || resistance <= 0) {
                        throw new Error('Current and resistance must be positive values.');
                    }
                    
                    voltage = current * resistance;
                    result = `<p>Voltage (V) = ${voltage.toFixed(2)} volts</p>`;
                    break;
                    
                case 'current':
                    voltage = parseFloat(voltageInput.value);
                    resistance = parseFloat(resistanceInput.value);
                    
                    if (isNaN(voltage) || isNaN(resistance)) {
                        throw new Error('Please enter valid numbers for voltage and resistance.');
                    }
                    
                    if (voltage < 0 || resistance <= 0) {
                        throw new Error('Voltage must be non-negative and resistance must be positive.');
                    }
                    
                    current = voltage / resistance;
                    result = `<p>Current (I) = ${current.toFixed(2)} amperes</p>`;
                    break;
                    
                case 'resistance':
                    voltage = parseFloat(voltageInput.value);
                    current = parseFloat(currentInput.value);
                    
                    if (isNaN(voltage) || isNaN(current)) {
                        throw new Error('Please enter valid numbers for voltage and current.');
                    }
                    
                    if (voltage < 0 || current <= 0) {
                        throw new Error('Voltage must be non-negative and current must be positive.');
                    }
                    
                    resistance = voltage / current;
                    result = `<p>Resistance (R) = ${resistance.toFixed(2)} ohms</p>`;
                    break;
            }
            
            resultDiv.innerHTML = result;
            updateVisualization(
                selectedType === 'voltage' ? voltage : parseFloat(voltageInput.value) || 0,
                selectedType === 'current' ? current : parseFloat(currentInput.value) || 0,
                selectedType === 'resistance' ? resistance : parseFloat(resistanceInput.value) || 0
            );
            
        } catch (error) {
            resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
        }
    }
    
    // Update the circuit visualization
    function updateVisualization(voltage, current, resistance) {
        visVoltage.textContent = `V = ${voltage.toFixed(2)} V`;
        visCurrent.textContent = `I = ${current.toFixed(2)} A`;
        visResistance.textContent = `R = ${resistance.toFixed(2)} Ω`;
        
        // Update visual elements based on values
        const battery = document.querySelector('.battery');
        const resistor = document.querySelector('.resistor');
        const ammeter = document.querySelector('.ammeter');
        
        // Scale the visual elements based on values (with limits)
        if (voltage > 0) {
            const batteryScale = Math.min(1 + (voltage / 20), 1.5);
            battery.style.transform = `scale(${batteryScale})`;
        } else {
            battery.style.transform = 'scale(1)';
        }
        
        if (current > 0) {
            const ammeterScale = Math.min(1 + (current / 5), 1.5);
            ammeter.style.transform = `scale(${ammeterScale})`;
        } else {
            ammeter.style.transform = 'scale(1)';
        }
        
        if (resistance > 0) {
            const resistorScale = Math.min(1 + (resistance / 100), 1.5);
            resistor.style.transform = `scale(${resistorScale})`;
        } else {
            resistor.style.transform = 'scale(1)';
        }
    }
    
    // Event listeners
    calcType.addEventListener('change', updateInputFields);
    calculateBtn.addEventListener('click', calculate);
    
    // Initialize the calculator
    updateInputFields();
    
    // Add input event listeners to update visualization in real-time
    [voltageInput, currentInput, resistanceInput].forEach(input => {
        input.addEventListener('input', function() {
            const v = parseFloat(voltageInput.value) || 0;
            const i = parseFloat(currentInput.value) || 0;
            const r = parseFloat(resistanceInput.value) || 0;
            updateVisualization(v, i, r);
        });
    });
});