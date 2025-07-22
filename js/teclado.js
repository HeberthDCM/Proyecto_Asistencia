document.addEventListener('DOMContentLoaded', function() {
    const employeeCodeInput = document.getElementById('employee-code');
    const employeePhoto = document.getElementById('employee-photo');
    const employeeName = document.getElementById('employee-name');
    const keys = document.querySelectorAll('.key');
    
    // Base de datos de empleados
    const employees = {
        '12345': { 
            name: 'Juan Pérez', 
            photo: 'https://randomuser.me/api/portraits/men/1.jpg' 
        },
        '67890': { 
            name: 'María García', 
            photo: 'https://randomuser.me/api/portraits/women/1.jpg' 
        },
        '54321': { 
            name: 'Carlos López', 
            photo: 'https://randomuser.me/api/portraits/men/2.jpg' 
        },
        '11111': { 
            name: 'Ana Martínez', 
            photo: 'https://randomuser.me/api/portraits/women/2.jpg' 
        }
    };
    
    // Manejadores de teclas
    keys.forEach(key => {
        key.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const action = this.getAttribute('data-action');
            
            if (action === 'clear') {
                clearEmployeeData();
            } else if (action === 'enter') {
                checkEmployee();
            } else if (value) {
                employeeCodeInput.value += value;
            }
        });
    });
    
    // Verificar empleado
    function checkEmployee() {
        const code = employeeCodeInput.value;
        if (employees[code]) {
            showEmployeeData(employees[code]);
            setTimeout(clearEmployeeData, 3000);
        } else if (code) {
            alert('Empleado no encontrado');
            clearEmployeeData();
        }
    }
    
    // Mostrar datos del empleado
    function showEmployeeData(employee) {
        employeePhoto.src = employee.photo;
        employeePhoto.style.display = 'block';
        employeeName.textContent = employee.name;
    }
    
    // Limpiar datos
    function clearEmployeeData() {
        employeeCodeInput.value = '';
        employeePhoto.src = '';
        employeePhoto.style.display = 'none';
        employeeName.textContent = '';
    }
    
    // Manejo de teclado físico
    document.addEventListener('keydown', function(e) {
        if (e.key >= '0' && e.key <= '9') {
            employeeCodeInput.value += e.key;
        } else if (e.key === 'Enter') {
            checkEmployee();
        } else if (e.key === 'Escape' || e.key === 'Delete') {
            clearEmployeeData();
        }
    });
});