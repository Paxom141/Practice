document.addEventListener('DOMContentLoaded', function() {
    // Здесь будет код для загрузки данных с сервера
    // Например:
    // fetch('/api/residents')
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById('total-residents').textContent = data.total;
    //         document.getElementById('free-rooms').textContent = data.free;
    //         document.getElementById('today-checkins').textContent = data.today;
    //     });
    
    // Для демонстрации:
    updateDashboard();
});

function updateDashboard() {
    // В реальном приложении эти данные будут приходить с сервера
    const demoData = {
        total: 120,
        free: 15,
        today: 2
    };
    
    document.getElementById('total-residents').textContent = demoData.total;
    document.getElementById('free-rooms').textContent = demoData.free;
    document.getElementById('today-checkins').textContent = demoData.today;
}

// Функция для добавления нового жильца
function addResident(event) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        room: document.getElementById('room').value,
        phone: document.getElementById('phone').value,
        university: document.getElementById('university').value,
        checkInDate: document.getElementById('checkInDate').value,
        checkOutDate: document.getElementById('checkOutDate').value
    };
    
    // Здесь будет отправка данных на сервер
    // fetch('/api/residents', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Жилец успешно добавлен!');
    //     window.location.href = 'residents.html';
    // });
    
    // Для демонстрации:
    alert('Жилец успешно добавлен! (демо)');
    window.location.href = 'residents.html';
}

// Функция для удаления жильца
function deleteResident(id) {
    if (confirm('Вы уверены, что хотите удалить этого жильца?')) {
        // Здесь будет запрос на удаление
        // fetch(`/api/residents/${id}`, { method: 'DELETE' })
        // .then(() => {
        //     alert('Жилец удален');
        //     window.location.reload();
        // });
        
        // Для демонстрации:
        alert(`Жилец с ID ${id} будет удален (демо)`);
        window.location.reload();
    }
}