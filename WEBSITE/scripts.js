// Lấy các phần tử HTML cần thiết
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Thêm sự kiện focus và blur vào search input
searchInput.addEventListener('focus', () => {
    searchButton.textContent = 'Search';
});

searchInput.addEventListener('blur', () => {
    searchButton.textContent = 'Book Now';
});

// scripts.js
function openMap() {
    document.getElementById('mapPopup').style.display = 'flex';
}

function closeMap() {
    document.getElementById('mapPopup').style.display = 'none';
}

function submitBooking() {
    alert('Booking submitted!');
}

document.getElementById('searchInput').addEventListener('focus', function() {
    const bookNowButton = document.getElementById('bookNowButton');
    bookNowButton.textContent = 'Search';
    bookNowButton.href = '#';
});

document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('searchInput');
    const bookNowButton = document.getElementById('bookNowButton');
    const isClickInsideSearch = searchInput.contains(event.target) || bookNowButton.contains(event.target);

    if (!isClickInsideSearch) {
        bookNowButton.textContent = 'Book Now';
        bookNowButton.href = 'booking.html';
    }

    const languageMenu = document.getElementById('languageMenu');
    if (event.target.id !== 'languageButton' && !languageMenu.contains(event.target)) {
        languageMenu.style.display = 'none';
    }
});

function toggleLanguageMenu() {
    const languageMenu = document.getElementById('languageMenu');
    languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
}

function switchLanguage(lang) {
    if (lang === 'vi') {
        document.getElementById('aboutUsTitle').textContent = 'VỀ CHÚNG TÔI';
        document.getElementById('aboutUsText1').textContent = 'NOVAHOME là một homestay ấm cúng, tọa lạc tại vị trí đắc địa, cung cấp không gian nghỉ dưỡng lý tưởng với đầy đủ tiện nghi và dịch vụ. Nơi này giúp bạn đắm mình trong không khí yên bình và tĩnh lặng.';
        document.getElementById('aboutUsText2').textContent = 'Đến với NOVAHOME, bạn sẽ được trải nghiệm các phòng rộng rãi, thoáng mát, đầy đủ tiện nghi, khu vực sinh hoạt chung, khu vườn nhỏ gọn gàng và bếp.';
        document.getElementById('aboutUsText3').textContent = 'Với đội ngũ nhân viên thân thiện và nhiệt tình, NOVAHOME hứa hẹn sẽ mang đến cho bạn những trải nghiệm nghỉ dưỡng tuyệt vời nhất.';
        document.getElementById('nearestServiceText').textContent = '📍 Tìm dịch vụ gần nhất';
        document.getElementById('contentText1').textContent = 'Huyện Côn Đảo là một quần đảo ngoài khơi tỉnh Bà Rịa - Vũng Tàu. Quần đảo này rộng 76 km2 gồm 16 hòn đảo, trong đó lớn nhất là đảo Côn Sơn. Côn Đảo cách Vũng Tàu 185 km, cách TP.HCM 230 km, cách Cần Thơ khoảng 83 km. Dịch vụ giao thông, đi lại, lưu trú, ăn uống trên đảo đã phát triển, khiến nơi này ngày càng xuất hiện trên bản đồ du lịch.';
        document.getElementById('contentText2').textContent = 'Bên cạnh du lịch tâm linh, nhiều du khách biết đến Côn Đảo là thiên đường nghỉ dưỡng, điểm đến phượt thú vị với nhiều điều để khám phá. Dưới đây là những gợi ý cho chuyến đi của bạn trên đảo này.';
        document.getElementById('getInTouchTitle').textContent = 'LIÊN HỆ';
        document.getElementById('getInTouchAddress').innerHTML = 'Bãi Đất Dốc<br>Thị trấn Côn Đảo<br>Huyện Côn Đảo<br>Tỉnh Bà Rịa - Vũng Tàu';
        document.getElementById('contactInfo').innerHTML = 'novahome.homestay@gmail.com<br>+84 33 660 0396';
        document.getElementById('findUsOnTitle').textContent = 'TÌM CHÚNG TÔI TRÊN';
        document.getElementById('languageButton').textContent = 'VIETNAMESE';
        document.getElementById('languageMenu').innerHTML = '<span onclick="switchLanguage(\'en\')">ENGLISH</span>';
    } else {
        location.reload(); // Reload the page to switch back to English
    }
}