// ========================================
// Lukula Family Portal - JavaScript
// ========================================

// ========================================
// Data Storage Keys
// ========================================
const STORAGE_KEYS = {
    USERS: 'family_users',
    FAMILY_MEMBERS: 'family_members',
    SAVINGS: 'family_savings',
    DEBITS: 'family_debits',
    SETTINGS: 'family_settings',
    CONTRIBUTIONS: 'family_contributions',
    CURRENT_USER: 'family_current_user',
    ACTIVITY: 'family_activity'
};

// ========================================
// Default Data Initialization
// ========================================
function initializeDefaultData() {
    // Initialize users if not exists
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        const defaultUsers = [
            {
                id: 1,
                username: 'edrine',
                password: 'edrine123',
                fullname: 'Edrine Mwesigwa',
                email: 'edrine.mwesigwa@example.com',
                role: 'superadmin',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                username: 'angel',
                password: 'angel123',
                fullname: 'Angel Mubeezi',
                email: 'angel.mubeezi@example.com',
                role: 'admin',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                username: 'joy',
                password: 'joy123',
                fullname: 'Joy Birungi',
                email: 'joy.birungi@example.com',
                role: 'admin',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                username: 'fred',
                password: 'fred123',
                fullname: 'Fred Lukula',
                email: 'fred.lukula@example.com',
                role: 'user',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 5,
                username: 'lydia',
                password: 'lydia123',
                fullname: 'Lydia Mirembe',
                email: 'lydia.mirembe@example.com',
                role: 'user',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 6,
                username: 'hope',
                password: 'hope123',
                fullname: 'Hope Mwebaza',
                email: 'hope.mwebaza@example.com',
                role: 'user',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 7,
                username: 'drice',
                password: 'drice123',
                fullname: 'Drice Muwanguzi',
                email: 'drice.muwanguzi@example.com',
                role: 'user',
                status: 'active',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }

    // Initialize family members if not exists
    if (!localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS)) {
        const defaultFamily = [
            {
                id: 1,
                userId: 1,
                fullname: 'Edrine Mwesigwa',
                relationship: 'Son',
                dob: '1993-05-13',
                gender: 'Male',
                bloodgroup: 'O+',
                occupation: 'Software Engineer',
                employer: 'Multi Level Technology',
                location: 'Abu Dhabi, UAE',
                allergies: 'None',
                medical: 'None',
                bio: 'Software engineer working in Abu Dhabi for Multi Level Technology. Born on May 13, 1993 in Uganda.',
                address: 'Abu Dhabi, UAE',
                emergency: '+971-50-123-4567',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                userId: 3,
                fullname: 'Joy Birungi',
                relationship: 'Mother',
                dob: '1970-01-01',
                gender: 'Female',
                bloodgroup: 'A+',
                occupation: 'Business Owner',
                allergies: 'None',
                medical: 'None',
                bio: 'Mother of the family, business owner.',
                address: 'Kampala, Uganda',
                emergency: '+256-70-123-4567',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                userId: 4,
                fullname: 'Fred Lukula',
                relationship: 'Father',
                dob: '1965-06-15',
                gender: 'Male',
                bloodgroup: 'B+',
                occupation: 'Engineer',
                allergies: 'Penicillin',
                medical: 'None',
                bio: 'Father of the family, engineer by profession.',
                address: 'Kampala, Uganda',
                emergency: '+256-70-234-5678',
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                userId: 5,
                fullname: 'Lydia Mirembe',
                relationship: 'Sister',
                dob: '1995-08-20',
                gender: 'Female',
                bloodgroup: 'O-',
                occupation: 'Nurse',
                allergies: 'Shellfish',
                medical: 'None',
                bio: 'Older sister, works as a nurse.',
                address: 'Kampala, Uganda',
                emergency: '+256-70-345-6789',
                createdAt: new Date().toISOString()
            },
            {
                id: 5,
                userId: 6,
                fullname: 'Hope Mwebaza',
                relationship: 'Sister',
                dob: '1998-03-10',
                gender: 'Female',
                bloodgroup: 'AB+',
                occupation: 'Teacher',
                allergies: 'None',
                medical: 'None',
                bio: 'Younger sister, works as a teacher.',
                address: 'Kampala, Uganda',
                emergency: '+256-70-456-7890',
                createdAt: new Date().toISOString()
            },
            {
                id: 6,
                userId: 2,
                fullname: 'Angel Mubeezi',
                relationship: 'Sister',
                dob: '1992-11-25',
                gender: 'Female',
                bloodgroup: 'A-',
                occupation: 'Accountant',
                allergies: 'Dust',
                medical: 'None',
                bio: 'Older sister, works as an accountant.',
                address: 'Kampala, Uganda',
                emergency: '+256-70-567-8901',
                createdAt: new Date().toISOString()
            },
            {
                id: 7,
                userId: 7,
                fullname: 'Drice Muwanguzi',
                relationship: 'Brother',
                dob: '2000-07-08',
                gender: 'Male',
                bloodgroup: 'B-',
                occupation: 'Student',
                allergies: 'None',
                medical: 'None',
                bio: 'Youngest brother, currently studying.',
                address: 'Kampala, Uganda',
                emergency: '+256-70-678-9012',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.FAMILY_MEMBERS, JSON.stringify(defaultFamily));
    }

    // Initialize savings if not exists
    if (!localStorage.getItem(STORAGE_KEYS.SAVINGS)) {
        const defaultSavings = [
            { id: 1, memberId: 1, memberName: 'Edrine Mwesigwa', amount: 500000, date: '2026-01-01', month: 'January', notes: 'Monthly contribution' },
            { id: 2, memberId: 2, memberName: 'Joy Birungi', amount: 300000, date: '2026-01-03', month: 'January', notes: 'Monthly contribution' },
            { id: 3, memberId: 3, memberName: 'Fred Lukula', amount: 400000, date: '2026-01-05', month: 'January', notes: 'Monthly contribution' },
            { id: 4, memberId: 4, memberName: 'Lydia Mirembe', amount: 200000, date: '2026-01-07', month: 'January', notes: 'Monthly contribution' },
            { id: 5, memberId: 5, memberName: 'Hope Mwebaza', amount: 150000, date: '2026-01-10', month: 'January', notes: 'Monthly contribution' },
            { id: 6, memberId: 6, memberName: 'Angel Mubeezi', amount: 250000, date: '2026-01-12', month: 'January', notes: 'Monthly contribution' },
            { id: 7, memberId: 7, memberName: 'Drice Muwanguzi', amount: 100000, date: '2026-01-15', month: 'January', notes: 'Monthly contribution' },
            { id: 8, memberId: 1, memberName: 'Edrine Mwesigwa', amount: 500000, date: '2026-02-01', month: 'February', notes: 'Monthly contribution' },
            { id: 9, memberId: 2, memberName: 'Joy Birungi', amount: 300000, date: '2026-02-03', month: 'February', notes: 'Monthly contribution' },
            { id: 10, memberId: 3, memberName: 'Fred Lukula', amount: 400000, date: '2026-02-05', month: 'February', notes: 'Monthly contribution' },
            { id: 11, memberId: 6, memberName: 'Angel Mubeezi', amount: 250000, date: '2026-02-10', month: 'February', notes: 'Monthly contribution' },
            { id: 12, memberId: 1, memberName: 'Edrine Mwesigwa', amount: 500000, date: '2026-02-14', month: 'February', notes: 'Extra contribution' }
        ];
        localStorage.setItem(STORAGE_KEYS.SAVINGS, JSON.stringify(defaultSavings));
    }

    // Initialize debits if not exists
    if (!localStorage.getItem(STORAGE_KEYS.DEBITS)) {
        const defaultDebits = [
            { id: 1, memberId: 1, memberName: 'Edrine Mwesigwa', amount: 500000, date: '2026-01-20', reason: 'Emergency home repair', repaymentDate: '2026-06-20', status: 'pending' },
            { id: 2, memberId: 3, memberName: 'Fred Lukula', amount: 300000, date: '2026-02-01', reason: 'Medical expenses', repaymentDate: '2026-05-01', status: 'pending' }
        ];
        localStorage.setItem(STORAGE_KEYS.DEBITS, JSON.stringify(defaultDebits));
    }

    // Initialize expected contributions if not exists
    if (!localStorage.getItem(STORAGE_KEYS.CONTRIBUTIONS)) {
        const defaultContributions = {
            1: 500000,  // Edrine
            2: 300000,  // Joy
            3: 400000,  // Fred
            4: 200000,  // Lydia
            5: 150000,  // Hope
            6: 250000,  // Angel
            7: 100000   // Drice
        };
        localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify(defaultContributions));
    }

    // Initialize settings if not exists
    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
        const defaultSettings = {
            savingsGoal: 10000000,
            currency: 'UGX',
            familyName: 'Lukula Family'
        };
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(defaultSettings));
    }

    // Initialize activity if not exists
    if (!localStorage.getItem(STORAGE_KEYS.ACTIVITY)) {
        const defaultActivity = [
            { id: 1, type: 'savings', message: 'Edrine Mwesigwa added UGX 500,000 in savings', timestamp: new Date().toISOString() },
            { id: 2, type: 'member', message: 'New family member added: Drice Muwanguzi', timestamp: new Date().toISOString() }
        ];
        localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(defaultActivity));
    }
}

// ========================================
// Utility Functions
// ========================================
function formatCurrency(amount) {
    return 'UGX ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function calculateAge(dob) {
    if (!dob) return 'N/A';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age + ' years';
}

function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// ========================================
// Image Upload Functions
// ========================================
function previewProfileImage() {
    const input = document.getElementById('profile-image');
    const preview = document.getElementById('profile-image-preview');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function previewFamilyImage() {
    const input = document.getElementById('family-image');
    const preview = document.getElementById('family-image-preview');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function loadProfileImage(userId) {
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const member = family.find(m => m.userId === userId);
    const preview = document.getElementById('profile-image-preview');

    if (member && member.image) {
        preview.src = member.image;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}

// ========================================
// SweetAlert Functions
// ========================================
function showAlert(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonColor: '#6366f1'
    });
}

function showSuccess(title, text) {
    Swal.fire({
        icon: 'success',
        title: title,
        text: text,
        confirmButtonColor: '#6366f1'
    });
}

function showError(title, text) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        confirmButtonColor: '#6366f1'
    });
}

function showConfirm(title, text, callback) {
    Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6366f1',
        cancelButtonColor: '#ef4444',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed && callback) {
            callback();
        }
    });
}

// ========================================
// Authentication Functions
// ========================================
function login(username, password) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

    if (!user) {
        showError('Login Failed', 'Invalid username or password');
        return { success: false, message: 'Invalid username or password' };
    }

    if (user.status === 'inactive') {
        showError('Account Deactivated', 'Your account has been deactivated. Contact admin for help.');
        return { success: false, message: 'Your account has been deactivated' };
    }

    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    Swal.fire({
        icon: 'success',
        title: 'Welcome Back!',
        text: `Hello ${user.fullname}!`,
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#6366f1'
    });
    return { success: true, user: user };
}

function logout() {
    showConfirm('Logout', 'Are you sure you want to logout?', () => {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        showLogin();
        Swal.fire({
            icon: 'success',
            title: 'Logged Out',
            text: 'See you soon!',
            timer: 1500,
            showConfirmButton: false
        });
    });
}

function getCurrentUser() {
    const userStr = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return userStr ? JSON.parse(userStr) : null;
}

function isAdmin() {
    const user = getCurrentUser();
    return user && (user.role === 'admin' || user.role === 'superadmin');
}

function isSuperAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'superadmin';
}

// ========================================
// UI Navigation Functions
// ========================================
function showLogin() {
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('app').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'flex';
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
}

function navigateTo(page) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });

    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(page + '-page').classList.add('active');

    // Load page data
    if (page === 'dashboard') loadDashboard();
    if (page === 'savings') loadSavings();
    if (page === 'family') loadFamily();
    if (page === 'profile') loadProfile();
    if (page === 'admin') loadAdmin();
    if (page === 'debits') loadDebits();
}

// ========================================
// Modal Functions
// ========================================
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
};

// ========================================
// Dashboard Functions
// ========================================
let savingsChart, monthlyChart, personalChart;

function loadDashboard() {
    document.getElementById('current-date').textContent = getCurrentDate();

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const savings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVINGS) || '[]');
    const settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || '{}');

    // Stats
    const totalMembers = users.filter(u => u.status === 'active').length;
    const totalSavings = savings.reduce((sum, s) => sum + s.amount, 0);

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const monthlyTotal = savings
        .filter(s => s.month === currentMonth)
        .reduce((sum, s) => sum + s.amount, 0);

    const goalProgress = settings.savingsGoal ? Math.round((totalSavings / settings.savingsGoal) * 100) : 0;

    document.getElementById('total-members').textContent = totalMembers;
    document.getElementById('total-savings').textContent = formatCurrency(totalSavings);
    document.getElementById('monthly-savings').textContent = formatCurrency(monthlyTotal);
    document.getElementById('goal-progress').textContent = goalProgress + '%';

    // Charts
    loadCharts(savings, users);

    // Recent Activity
    loadRecentActivity();
}

function loadCharts(savings, users) {
    const ctx1 = document.getElementById('savingsChart').getContext('2d');
    const ctx2 = document.getElementById('monthlyChart').getContext('2d');
    const ctx3 = document.getElementById('personalChart').getContext('2d');

    // Destroy existing charts
    if (savingsChart) savingsChart.destroy();
    if (monthlyChart) monthlyChart.destroy();
    if (personalChart) personalChart.destroy();

    // Savings distribution by member
    const memberSavings = {};
    savings.forEach(s => {
        if (!memberSavings[s.memberName]) {
            memberSavings[s.memberName] = 0;
        }
        memberSavings[s.memberName] += s.amount;
    });

    const colors = [
        '#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#3b82f6', '#ec4899'
    ];

    savingsChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: Object.keys(memberSavings),
            datasets: [{
                data: Object.values(memberSavings),
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        padding: 15
                    }
                }
            }
        }
    });

    // Monthly progress
    const monthlyData = {};
    const months = ['January', 'February', 'March', 'April', 'May', 'June'];
    months.forEach(m => {
        monthlyData[m] = savings
            .filter(s => s.month === m)
            .reduce((sum, s) => sum + s.amount, 0);
    });

    monthlyChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: Object.keys(monthlyData),
            datasets: [{
                label: 'Savings (UGX)',
                data: Object.values(monthlyData),
                backgroundColor: '#6366f1',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return 'UGX ' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            }
        }
    });

    // Personal contributions vs expected
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const contributions = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTRIBUTIONS) || '{}');

    const personalData = {
        actual: [],
        expected: [],
        labels: []
    };

    family.forEach(member => {
        personalData.labels.push(member.fullname.split(' ')[0]);
        const memberSavings = savings.filter(s => s.memberId === member.id).reduce((sum, s) => sum + s.amount, 0);
        const expected = contributions[member.id] || 0;
        personalData.actual.push(memberSavings);
        personalData.expected.push(expected * 2); // 2 months of expected contributions
    });

    personalChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: personalData.labels,
            datasets: [
                {
                    label: 'Actual Savings',
                    data: personalData.actual,
                    backgroundColor: '#10b981',
                    borderRadius: 6
                },
                {
                    label: 'Expected (2 months)',
                    data: personalData.expected,
                    backgroundColor: '#6366f1',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return 'UGX ' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            }
        }
    });
}

function loadRecentActivity() {
    const activity = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVITY) || '[]');
    const container = document.getElementById('recent-activity-list');

    if (activity.length === 0) {
        container.innerHTML = `
            <div class="activity-item">
                <div class="activity-icon green">
                    <i class="fas fa-plus"></i>
                </div>
                <div class="activity-details">
                    <p>No recent activity</p>
                    <span class="activity-time">Start by adding your savings!</span>
                </div>
            </div>
        `;
        return;
    }

    const recent = activity.slice(0, 5);
    container.innerHTML = recent.map(a => `
        <div class="activity-item">
            <div class="activity-icon ${a.type === 'savings' ? 'green' : a.type === 'debit' ? 'orange' : 'blue'}">
                <i class="fas fa-${a.type === 'savings' ? 'piggy-bank' : a.type === 'debit' ? 'money-bill-wave' : 'user-plus'}"></i>
            </div>
            <div class="activity-details">
                <p>${a.message}</p>
                <span class="activity-time">${formatDate(a.timestamp)}</span>
            </div>
        </div>
    `).join('');
}

function addActivity(type, message) {
    const activity = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVITY) || '[]');
    activity.unshift({
        id: generateId(),
        type: type,
        message: message,
        timestamp: new Date().toISOString()
    });
    // Keep only last 20 activities
    localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(activity.slice(0, 20)));
}

// ========================================
// Savings Functions
// ========================================
function loadSavings() {
    const savings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVINGS) || '[]');
    const settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || '{}');
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');

    // Summary
    const totalSaved = savings.reduce((sum, s) => sum + s.amount, 0);
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const monthlyContrib = savings
        .filter(s => s.month === currentMonth)
        .reduce((sum, s) => sum + s.amount, 0);

    document.getElementById('monthly-contribution').textContent = formatCurrency(monthlyContrib);
    document.getElementById('total-saved').textContent = formatCurrency(totalSaved);
    document.getElementById('savings-goal').textContent = formatCurrency(settings.savingsGoal || 10000000);

    // Populate member dropdown
    const memberSelect = document.getElementById('savings-member');
    memberSelect.innerHTML = family.map(m =>
        `<option value="${m.id}">${m.fullname}</option>`
    ).join('');

    // Set default date
    document.getElementById('savings-date').valueAsDate = new Date();

    // Table
    renderSavingsTable(savings);
}

function renderSavingsTable(savings) {
    const tbody = document.getElementById('savings-table-body');

    tbody.innerHTML = savings.sort((a, b) => new Date(b.date) - new Date(a.date)).map(s => `
        <tr>
            <td>${s.memberName}</td>
            <td><strong>${formatCurrency(s.amount)}</strong></td>
            <td>${formatDate(s.date)}</td>
            <td>${s.month}</td>
            <td>${s.notes || '-'}</td>
            <td>
                <div class="action-btns">
                    ${canDeleteSavings(s) ? `
                    <button class="btn-action delete" onclick="deleteSavings(${s.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    ` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

function canDeleteSavings(savings) {
    const user = getCurrentUser();
    if (isAdmin()) return true;
    // Users can only delete their own savings
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const member = family.find(m => m.userId === user.id);
    return member && member.id === savings.memberId;
}

function showAddSavingsModal() {
    showModal('savings-modal');
    Swal.fire({
        icon: 'info',
        title: 'Add Savings',
        text: 'Enter the savings details below',
        timer: 1500,
        showConfirmButton: false
    });
}

function addSavings(e) {
    e.preventDefault();

    const memberId = parseInt(document.getElementById('savings-member').value);
    const amount = parseInt(document.getElementById('savings-amount').value);
    const date = document.getElementById('savings-date').value;
    const notes = document.getElementById('savings-notes').value;

    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const member = family.find(m => m.id === memberId);

    const savings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVINGS) || '[]');
    const newSavings = {
        id: generateId(),
        memberId: memberId,
        memberName: member.fullname,
        amount: amount,
        date: date,
        month: new Date(date).toLocaleString('default', { month: 'long' }),
        notes: notes
    };

    savings.push(newSavings);
    localStorage.setItem(STORAGE_KEYS.SAVINGS, JSON.stringify(savings));

    addActivity('savings', `${member.fullname} added ${formatCurrency(amount)} in savings`);

    closeModal('savings-modal');
    document.getElementById('savings-form').reset();
    document.getElementById('savings-date').valueAsDate = new Date();

    loadSavings();
    loadDashboard();

    showSuccess('Savings Added!', `${formatCurrency(amount)} has been added successfully`);
}

function deleteSavings(id) {
    showConfirm('Delete Savings', 'Are you sure you want to delete this savings record?', () => {
        let savings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVINGS) || '[]');
        const deleted = savings.find(s => s.id === id);
        savings = savings.filter(s => s.id !== id);

        localStorage.setItem(STORAGE_KEYS.SAVINGS, JSON.stringify(savings));

        if (deleted) {
            addActivity('savings', `${deleted.memberName}'s savings of ${formatCurrency(deleted.amount)} was deleted`);
        }

        loadSavings();
        loadDashboard();

        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Savings record has been deleted.',
            timer: 1500,
            showConfirmButton: false
        });
    });
}

// ========================================
// Debits Functions
// ========================================
function loadDebits() {
    const debits = JSON.parse(localStorage.getItem(STORAGE_KEYS.DEBITS) || '[]');
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');

    // Summary
    const totalDebits = debits.reduce((sum, d) => sum + d.amount, 0);
    const pending = debits.filter(d => d.status === 'pending').reduce((sum, d) => sum + d.amount, 0);
    const repaid = debits.filter(d => d.status === 'repaid').reduce((sum, d) => sum + d.amount, 0);

    document.getElementById('total-debits').textContent = formatCurrency(totalDebits);
    document.getElementById('pending-repayments').textContent = formatCurrency(pending);
    document.getElementById('repaid-amount').textContent = formatCurrency(repaid);

    // Populate member dropdown
    const memberSelect = document.getElementById('debit-member');
    memberSelect.innerHTML = family.map(m =>
        `<option value="${m.id}">${m.fullname}</option>`
    ).join('');

    // Set default date
    document.getElementById('debit-date').valueAsDate = new Date();

    // Table
    renderDebitsTable(debits);
}

function renderDebitsTable(debits) {
    const tbody = document.getElementById('debits-table-body');

    tbody.innerHTML = debits.sort((a, b) => new Date(b.date) - new Date(a.date)).map(d => `
        <tr>
            <td>${d.memberName}</td>
            <td><strong style="color: #ef4444;">${formatCurrency(d.amount)}</strong></td>
            <td>${formatDate(d.date)}</td>
            <td>${d.reason}</td>
            <td>${d.repaymentDate ? formatDate(d.repaymentDate) : 'Not set'}</td>
            <td>
                <span class="${d.status === 'pending' ? 'text-warning' : 'text-success'}">
                    ${d.status === 'pending' ? '⏳ Pending' : '✓ Repaid'}
                </span>
            </td>
            <td>
                <div class="action-btns">
                    ${d.status === 'pending' ? `
                    <button class="btn-action edit" onclick="markAsRepaid(${d.id})" title="Mark as Repaid">
                        <i class="fas fa-check"></i>
                    </button>
                    ` : ''}
                    ${isAdmin() ? `
                    <button class="btn-action delete" onclick="deleteDebit(${d.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    ` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

function showAddDebitModal() {
    showModal('debit-modal');
    Swal.fire({
        icon: 'warning',
        title: 'Record Withdrawal',
        text: 'Please provide withdrawal details',
        timer: 1500,
        showConfirmButton: false
    });
}

function addDebit(e) {
    e.preventDefault();

    const memberId = parseInt(document.getElementById('debit-member').value);
    const amount = parseInt(document.getElementById('debit-amount').value);
    const date = document.getElementById('debit-date').value;
    const reason = document.getElementById('debit-reason').value;
    const repaymentDate = document.getElementById('debit-repayment-date').value;

    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const member = family.find(m => m.id === memberId);

    const debits = JSON.parse(localStorage.getItem(STORAGE_KEYS.DEBITS) || '[]');
    const newDebit = {
        id: generateId(),
        memberId: memberId,
        memberName: member.fullname,
        amount: amount,
        date: date,
        reason: reason,
        repaymentDate: repaymentDate,
        status: 'pending'
    };

    debits.push(newDebit);
    localStorage.setItem(STORAGE_KEYS.DEBITS, JSON.stringify(debits));

    addActivity('debit', `${member.fullname} withdrew ${formatCurrency(amount)} for ${reason}`);

    closeModal('debit-modal');
    document.getElementById('debit-form').reset();
    document.getElementById('debit-date').valueAsDate = new Date();

    loadDebits();
    loadDashboard();

    showSuccess('Withdrawal Recorded!', `${formatCurrency(amount)} has been recorded as withdrawn`);
}

function markAsRepaid(id) {
    showConfirm('Mark as Repaid', 'Confirm that this amount has been fully repaid?', () => {
        let debits = JSON.parse(localStorage.getItem(STORAGE_KEYS.DEBITS) || '[]');
        const debit = debits.find(d => d.id === id);

        if (debit) {
            debit.status = 'repaid';
            localStorage.setItem(STORAGE_KEYS.DEBITS, JSON.stringify(debits));

            addActivity('debit', `${debit.memberName} repaid ${formatCurrency(debit.amount)}`);

            loadDebits();
            loadDashboard();

            showSuccess('Repaid!', 'The withdrawal has been marked as repaid');
        }
    });
}

function deleteDebit(id) {
    showConfirm('Delete Withdrawal', 'Are you sure you want to delete this withdrawal record?', () => {
        let debits = JSON.parse(localStorage.getItem(STORAGE_KEYS.DEBITS) || '[]');
        const deleted = debits.find(d => d.id === id);
        debits = debits.filter(d => d.id !== id);

        localStorage.setItem(STORAGE_KEYS.DEBITS, JSON.stringify(debits));

        if (deleted) {
            addActivity('debit', `Withdrawal of ${formatCurrency(deleted.amount)} was deleted`);
        }

        loadDebits();
        loadDashboard();

        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Withdrawal record has been deleted.',
            timer: 1500,
            showConfirmButton: false
        });
    });
}

// ========================================
// Family Functions
// ========================================
function loadFamily() {
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    renderFamilyGrid(family);
}

function renderFamilyGrid(family) {
    const grid = document.getElementById('family-grid');

    grid.innerHTML = family.map(m => `
        <div class="family-card">
            <div class="family-card-header">
                <div class="family-avatar">
                    <i class="fas fa-${m.gender === 'Male' ? 'male' : 'female'}"></i>
                </div>
                <div>
                    <h3>${m.fullname}</h3>
                    <span>${m.relationship}</span>
                </div>
            </div>
            <div class="family-card-body">
                ${m.occupation ? `<div class="family-info-item"><i class="fas fa-briefcase"></i><span>${m.occupation}</span></div>` : ''}
                ${m.dob ? `<div class="family-info-item"><i class="fas fa-birthday-cake"></i><strong>Age:</strong> <span>${calculateAge(m.dob)}</span></div>` : ''}
                ${m.bloodgroup ? `<div class="family-info-item"><i class="fas fa-tint"></i><strong>Blood:</strong> <span>${m.bloodgroup}</span></div>` : ''}
                ${m.location ? `<div class="family-info-item"><i class="fas fa-map-marker-alt"></i><span>${m.location}</span></div>` : ''}
                ${m.employer ? `<div class="family-info-item"><i class="fas fa-building"></i><span>${m.employer}</span></div>` : ''}
            </div>
            <div class="family-card-actions">
                <button class="btn-view" onclick="viewMember(${m.id})">
                    <i class="fas fa-eye"></i> View
                </button>
                ${canEditMember(m) ? `
                <button class="btn-delete" onclick="deleteMember(${m.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function canEditMember(member) {
    return isAdmin();
}

function showAddFamilyMemberModal() {
    showModal('family-modal');
    Swal.fire({
        icon: 'info',
        title: 'Add Family Member',
        text: 'Enter the family member details below',
        timer: 1500,
        showConfirmButton: false
    });
}

function addFamilyMember(e) {
    e.preventDefault();

    const currentUser = getCurrentUser();
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');

    const newMember = {
        id: generateId(),
        userId: currentUser ? currentUser.id : null,
        fullname: document.getElementById('family-fullname').value,
        relationship: document.getElementById('family-relationship').value,
        dob: document.getElementById('family-dob').value,
        gender: document.getElementById('family-gender').value,
        bloodgroup: document.getElementById('family-bloodgroup').value,
        occupation: document.getElementById('family-occupation').value,
        allergies: document.getElementById('family-allergies').value,
        medical: document.getElementById('family-medical').value,
        bio: document.getElementById('family-bio').value,
        address: document.getElementById('family-address').value,
        emergency: document.getElementById('family-emergency').value,
        createdAt: new Date().toISOString()
    };

    family.push(newMember);
    localStorage.setItem(STORAGE_KEYS.FAMILY_MEMBERS, JSON.stringify(family));

    addActivity('member', `New family member added: ${newMember.fullname}`);

    closeModal('family-modal');
    document.getElementById('family-form').reset();

    loadFamily();
    loadDashboard();

    showSuccess('Member Added!', `${newMember.fullname} has been added to the family`);
}

function viewMember(id) {
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const member = family.find(m => m.id === id);

    if (!member) return;

    const details = document.getElementById('member-details');
    details.innerHTML = `
        <div class="detail-row"><div class="detail-label">Full Name</div><div class="detail-value">${member.fullname}</div></div>
        <div class="detail-row"><div class="detail-label">Relationship</div><div class="detail-value">${member.relationship || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Date of Birth</div><div class="detail-value">${member.dob ? formatDate(member.dob) : '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Age</div><div class="detail-value">${calculateAge(member.dob)}</div></div>
        <div class="detail-row"><div class="detail-label">Gender</div><div class="detail-value">${member.gender || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Blood Group</div><div class="detail-value">${member.bloodgroup || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Occupation</div><div class="detail-value">${member.occupation || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Employer</div><div class="detail-value">${member.employer || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Location</div><div class="detail-value">${member.location || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Allergies</div><div class="detail-value">${member.allergies || 'None'}</div></div>
        <div class="detail-row"><div class="detail-label">Medical Conditions</div><div class="detail-value">${member.medical || 'None'}</div></div>
        <div class="detail-row"><div class="detail-label">Biography</div><div class="detail-value">${member.bio || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Address</div><div class="detail-value">${member.address || '-'}</div></div>
        <div class="detail-row"><div class="detail-label">Emergency Contact</div><div class="detail-value">${member.emergency || '-'}</div></div>
    `;

    showModal('view-member-modal');
}

function deleteMember(id) {
    showConfirm('Delete Member', 'Are you sure you want to delete this family member?', () => {
        let family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
        const deleted = family.find(m => m.id === id);
        family = family.filter(m => m.id !== id);

        localStorage.setItem(STORAGE_KEYS.FAMILY_MEMBERS, JSON.stringify(family));

        if (deleted) {
            addActivity('member', `Family member removed: ${deleted.fullname}`);
        }

        loadFamily();
        loadDashboard();

        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Family member has been removed.',
            timer: 1500,
            showConfirmButton: false
        });
    });
}

// ========================================
// Profile Functions
// ========================================
function loadProfile() {
    const user = getCurrentUser();
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const member = family.find(m => m.userId === user.id);

    document.getElementById('profile-name').textContent = user.fullname;
    document.getElementById('profile-username').textContent = '@' + user.username;
    document.getElementById('profile-role').textContent = user.role;
    document.getElementById('profile-role').className = 'role-badge ' + (user.role === 'superadmin' ? 'superadmin' : user.role);

    if (member) {
        document.getElementById('profile-fullname').value = member.fullname || '';
        document.getElementById('profile-email').value = user.email || '';
        document.getElementById('profile-dob').value = member.dob || '';
        document.getElementById('profile-gender').value = member.gender || '';
        document.getElementById('profile-bloodgroup').value = member.bloodgroup || '';
        document.getElementById('profile-relationship').value = member.relationship || '';
        document.getElementById('profile-allergies').value = member.allergies || '';
        document.getElementById('profile-medical').value = member.medical || '';
        document.getElementById('profile-bio').value = member.bio || '';
        document.getElementById('profile-occupation').value = member.occupation || '';
        document.getElementById('profile-employer').value = member.employer || '';
        document.getElementById('profile-emergency').value = member.emergency || '';
        document.getElementById('profile-address').value = member.address || '';
    } else {
        document.getElementById('profile-fullname').value = user.fullname;
        document.getElementById('profile-email').value = user.email;
    }
}

function updateProfile(e) {
    e.preventDefault();

    const user = getCurrentUser();
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const memberIndex = family.findIndex(m => m.userId === user.id);

    const updatedMember = {
        ...family[memberIndex],
        fullname: document.getElementById('profile-fullname').value,
        dob: document.getElementById('profile-dob').value,
        gender: document.getElementById('profile-gender').value,
        bloodgroup: document.getElementById('profile-bloodgroup').value,
        relationship: document.getElementById('profile-relationship').value,
        allergies: document.getElementById('profile-allergies').value,
        medical: document.getElementById('profile-medical').value,
        bio: document.getElementById('profile-bio').value,
        occupation: document.getElementById('profile-occupation').value,
        employer: document.getElementById('profile-employer').value,
        emergency: document.getElementById('profile-emergency').value,
        address: document.getElementById('profile-address').value
    };

    if (memberIndex > -1) {
        family[memberIndex] = updatedMember;
    } else {
        updatedMember.id = generateId();
        updatedMember.userId = user.id;
        family.push(updatedMember);
    }

    localStorage.setItem(STORAGE_KEYS.FAMILY_MEMBERS, JSON.stringify(family));

    // Update user data
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex > -1) {
        users[userIndex].fullname = document.getElementById('profile-fullname').value;
        users[userIndex].email = document.getElementById('profile-email').value;
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

        // Update current user session
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(users[userIndex]));
    }

    showSuccess('Profile Updated!', 'Your profile has been saved successfully');
    loadFamily();
    loadDashboard();
}

// ========================================
// Admin Functions
// ========================================
function loadAdmin() {
    if (!isAdmin()) {
        showError('Access Denied', 'Admin privileges required to access this page');
        navigateTo('dashboard');
        return;
    }

    loadUsersTable();
    loadSettings();
    loadContributionsSettings();
}

function loadUsersTable() {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const tbody = document.getElementById('users-table-body');

    tbody.innerHTML = users.map(u => {
        const member = family.find(m => m.userId === u.id);
        return `
        <tr>
            <td><strong>${u.username}</strong></td>
            <td>${u.fullname}</td>
            <td>${u.email}</td>
            <td>
                <span class="role-badge ${u.role}">${u.role}</span>
            </td>
            <td>
                <span class="${u.status === 'active' ? 'text-success' : 'text-danger'}">
                    ${u.status}
                </span>
            </td>
            <td>
                <div class="action-btns">
                    ${canEditUserProfile(u) ? `
                    <button class="btn-action edit" onclick="editUserProfile(${u.id})" title="Edit Profile">
                        <i class="fas fa-user-edit"></i>
                    </button>
                    ` : ''}
                    ${canEditUser(u) ? `
                    <button class="btn-action edit" onclick="editUser(${u.id})" title="Edit Role/Status">
                        <i class="fas fa-edit"></i>
                    </button>
                    ` : ''}
                </div>
            </td>
        </tr>
    `}).join('');
}

function canEditUserProfile(targetUser) {
    const user = getCurrentUser();
    // Only super admin can edit profiles
    return user && user.role === 'superadmin';
}

function editUserProfile(userId) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const user = users.find(u => u.id === userId);
    const member = family.find(m => m.userId === userId);

    if (!user) return;

    // Navigate to profile page with the user data
    showEditProfileForUser(user, member);
}

function canEditUser(targetUser) {
    const user = getCurrentUser();
    if (user.role === 'superadmin') {
        // Superadmin can edit everyone except themselves
        return targetUser.id !== user.id;
    }
    if (user.role === 'admin') {
        // Admin can only edit regular users
        return targetUser.role === 'user';
    }
    return false;
}

function editUser(id) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const user = users.find(u => u.id === id);

    if (!user) return;

    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-user-role').value = user.role;
    document.getElementById('edit-user-status').value = user.status;

    showModal('edit-user-modal');
}

function updateUser(e) {
    e.preventDefault();

    const userId = parseInt(document.getElementById('edit-user-id').value);
    const newRole = document.getElementById('edit-user-role').value;
    const newStatus = document.getElementById('edit-user-status').value;

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex > -1) {
        users[userIndex].role = newRole;
        users[userIndex].status = newStatus;
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

        addActivity('admin', `User ${users[userIndex].fullname} was updated`);
    }

    closeModal('edit-user-modal');
    loadUsersTable();

    showSuccess('User Updated!', 'User permissions have been updated');
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || '{}');
    document.getElementById('settings-goal').value = settings.savingsGoal || 10000000;
}

function saveSettings() {
    const goal = parseInt(document.getElementById('settings-goal').value);

    const settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || '{}');
    settings.savingsGoal = goal;
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));

    showSuccess('Settings Saved!', 'Your settings have been updated successfully');
    loadDashboard();
}

function loadContributionsSettings() {
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const contributions = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTRIBUTIONS) || '{}');

    const container = document.getElementById('contributions-list');

    container.innerHTML = family.map(m => `
        <div class="form-row" style="margin-bottom: 15px;">
            <div class="form-group" style="flex: 2;">
                <label>${m.fullname} (${m.relationship})</label>
            </div>
            <div class="form-group" style="flex: 1;">
                <input type="number" id="contrib-${m.id}" value="${contributions[m.id] || 0}" min="0" placeholder="Amount">
            </div>
        </div>
    `).join('');
}

function saveContributions() {
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const contributions = {};

    family.forEach(m => {
        const value = document.getElementById(`contrib-${m.id}`).value;
        contributions[m.id] = parseInt(value) || 0;
    });

    localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify(contributions));

    showSuccess('Contributions Saved!', 'Monthly expected contributions have been updated');
    loadDashboard();
}

// ========================================
// Registration
// ========================================
function register(username, password, fullname, email) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');

    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
        showError('Registration Failed', 'Username already exists');
        return { success: false, message: 'Username already exists' };
    }

    const newUser = {
        id: generateId(),
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        role: 'user',
        status: 'active',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    // Auto-login after registration
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

    Swal.fire({
        icon: 'success',
        title: 'Welcome!',
        text: `Welcome to the family, ${fullname}!`,
        confirmButtonColor: '#6366f1'
    });

    return { success: true, user: newUser };
}

// ========================================
// Event Listeners
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Initialize default data
    initializeDefaultData();

    // Check for existing session
    const currentUser = getCurrentUser();
    if (currentUser) {
        showApp(currentUser);
    } else {
        showLogin();
    }

    // Login form
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const result = login(username, password);
        if (result.success) {
            showApp(result.user);
        }
    });

    // Register form
    document.getElementById('register-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const fullname = document.getElementById('reg-fullname').value;
        const email = document.getElementById('reg-email').value;

        const result = register(username, password, fullname, email);
        if (result.success) {
            showApp(result.user);
        }
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            navigateTo(this.dataset.page);
        });
    });

    // Admin tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.dataset.tab + '-tab').classList.add('active');
        });
    });

    // Savings form
    document.getElementById('savings-form').addEventListener('submit', addSavings);

    // Family form
    document.getElementById('family-form').addEventListener('submit', addFamilyMember);

    // Debit form
    document.getElementById('debit-form').addEventListener('submit', addDebit);

    // Profile form
    document.getElementById('profile-form').addEventListener('submit', updateProfile);

    // Edit user form
    document.getElementById('edit-user-form').addEventListener('submit', updateUser);
});

// ========================================
// Show App Function
// ========================================
function showApp(user) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('app').style.display = 'flex';

    document.getElementById('current-user-name').textContent = user.fullname;
    document.getElementById('current-user-role').textContent = user.role;
    document.getElementById('current-user-role').className = 'role-badge ' + (user.role === 'superadmin' ? 'superadmin' : user.role);

    // Show/hide admin nav
    if (isAdmin()) {
        document.getElementById('admin-nav').style.display = 'flex';
    } else {
        document.getElementById('admin-nav').style.display = 'none';
    }

    // Load dashboard
    navigateTo('dashboard');
}

// ========================================
// Super Admin Edit Profile Functions
// ========================================
function editUserProfile(userId) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');
    const user = users.find(u => u.id === userId);
    const member = family.find(m => m.userId === userId);

    if (!user) return;

    // Create a modal for editing profile using SweetAlert
    Swal.fire({
        title: 'Edit Profile: ' + user.fullname,
        html: `
            <div style="text-align: left; max-height: 400px; overflow-y: auto;">
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Full Name</label>
                    <input type="text" id="edit-profile-fullname" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;" value="${user.fullname}">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Email</label>
                    <input type="email" id="edit-profile-email" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;" value="${user.email}">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Date of Birth</label>
                    <input type="date" id="edit-profile-dob" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;" value="${member ? member.dob || '' : ''}">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Gender</label>
                    <select id="edit-profile-gender" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;">
                        <option value="">Select</option>
                        <option value="Male" ${member && member.gender === 'Male' ? 'selected' : ''}>Male</option>
                        <option value="Female" ${member && member.gender === 'Female' ? 'selected' : ''}>Female</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Blood Group</label>
                    <select id="edit-profile-bloodgroup" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;">
                        <option value="">Select</option>
                        <option value="A+" ${member && member.bloodgroup === 'A+' ? 'selected' : ''}>A+</option>
                        <option value="A-" ${member && member.bloodgroup === 'A-' ? 'selected' : ''}>A-</option>
                        <option value="B+" ${member && member.bloodgroup === 'B+' ? 'selected' : ''}>B+</option>
                        <option value="B-" ${member && member.bloodgroup === 'B-' ? 'selected' : ''}>B-</option>
                        <option value="AB+" ${member && member.bloodgroup === 'AB+' ? 'selected' : ''}>AB+</option>
                        <option value="AB-" ${member && member.bloodgroup === 'AB-' ? 'selected' : ''}>AB-</option>
                        <option value="O+" ${member && member.bloodgroup === 'O+' ? 'selected' : ''}>O+</option>
                        <option value="O-" ${member && member.bloodgroup === 'O-' ? 'selected' : ''}>O-</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Occupation</label>
                    <input type="text" id="edit-profile-occupation" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;" value="${member ? member.occupation || '' : ''}">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Employer</label>
                    <input type="text" id="edit-profile-employer" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;" value="${member ? member.employer || '' : ''}">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Biography</label>
                    <textarea id="edit-profile-bio" style="width: 100%; padding: 10px; border: 1px solid #d9d9d9; border-radius: 4px;" rows="3">${member ? member.bio || '' : ''}</textarea>
                </div>
            </div>
        `,
        confirmButtonText: 'Save Changes',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        width: '500px'
    }).then((result) => {
        if (result.isConfirmed) {
            saveUserProfileFromAdmin(userId);
        }
    });
}

function saveUserProfileFromAdmin(userId) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    let family = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAMILY_MEMBERS) || '[]');

    const userIndex = users.findIndex(u => u.id === userId);
    const memberIndex = family.findIndex(m => m.userId === userId);

    const fullname = document.getElementById('edit-profile-fullname').value;
    const email = document.getElementById('edit-profile-email').value;
    const dob = document.getElementById('edit-profile-dob').value;
    const gender = document.getElementById('edit-profile-gender').value;
    const bloodgroup = document.getElementById('edit-profile-bloodgroup').value;
    const occupation = document.getElementById('edit-profile-occupation').value;
    const employer = document.getElementById('edit-profile-employer').value;
    const bio = document.getElementById('edit-profile-bio').value;

    if (userIndex > -1) {
        users[userIndex].fullname = fullname;
        users[userIndex].email = email;
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }

    if (memberIndex > -1) {
        family[memberIndex].fullname = fullname;
        family[memberIndex].dob = dob;
        family[memberIndex].gender = gender;
        family[memberIndex].bloodgroup = bloodgroup;
        family[memberIndex].occupation = occupation;
        family[memberIndex].employer = employer;
        family[memberIndex].bio = bio;
    } else {
        family.push({
            id: generateId(),
            userId: userId,
            fullname: fullname,
            dob: dob,
            gender: gender,
            bloodgroup: bloodgroup,
            occupation: occupation,
            employer: employer,
            bio: bio,
            createdAt: new Date().toISOString()
        });
    }

    localStorage.setItem(STORAGE_KEYS.FAMILY_MEMBERS, JSON.stringify(family));

    addActivity('admin', 'Profile updated for ' + fullname);

    showSuccess('Profile Updated!', 'User profile has been updated successfully');
    loadUsersTable();
    loadFamily();
    loadDashboard();
}
