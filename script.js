document.addEventListener('DOMContentLoaded', function() {
    const codigoInput = document.getElementById('codigo');
    const photoPlaceholder = document.getElementById('photo-placeholder');
    const employeeInfo = document.getElementById('employee-info');
    const clearBtn = document.getElementById('clear');
    const enterBtn = document.getElementById('enter');
    
    // Simulación de base de datos de empleados
    const empleados = {
        '12345': { 
            nombre: 'Juan Pérez', 
            departamento: 'Ventas', 
            foto: 'https://randomuser.me/api/portraits/men/1.jpg' 
        },
        '67890': { 
            nombre: 'María García', 
            departamento: 'Recursos Humanos', 
            foto: 'https://randomuser.me/api/portraits/women/1.jpg' 
        }
    };
    
    // Manejadores de teclas numéricas
    document.querySelectorAll('.key[data-value]').forEach(button => {
        button.addEventListener('click', function() {
            if (codigoInput.value.length < 10) {
                codigoInput.value += this.getAttribute('data-value');
            }
        });
    });
    
    // Botón de limpiar
    clearBtn.addEventListener('click', function() {
        codigoInput.value = '';
        clearEmployeeInfo();
    });
    
    // Botón de enter
    enterBtn.addEventListener('click', function() {
        const codigo = codigoInput.value;
        if (codigo) {
            buscarEmpleado(codigo);
        }
    });
    
    // Función para buscar empleado
    function buscarEmpleado(codigo) {
        const empleado = empleados[codigo];
        
        if (empleado) {
            // Mostrar información del empleado
            photoPlaceholder.innerHTML = `<img src="${empleado.foto}" alt="${empleado.nombre}">`;
            employeeInfo.innerHTML = `<strong>${empleado.nombre}</strong><br>${empleado.departamento}`;
            
            // Simular registro de asistencia
            setTimeout(() => {
                alert(`Asistencia registrada para ${empleado.nombre}`);
                codigoInput.value = '';
                clearEmployeeInfo();
            }, 500);
        } else {
            alert('Empleado no encontrado');
            codigoInput.value = '';
            clearEmployeeInfo();
        }
    }
    
    // Función para limpiar la información del empleado
    function clearEmployeeInfo() {
        photoPlaceholder.innerHTML = '<span>Fotografía aparecerá aquí</span>';
        employeeInfo.innerHTML = '';
    }
});