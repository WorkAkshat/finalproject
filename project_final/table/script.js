document.addEventListener('DOMContentLoaded', function() {
    var openBtn = document.getElementById('openBtn');
    var closeBtn = document.getElementById('closeBtn');
    var drawer = document.getElementById('drawer');
    var mainContent = document.querySelector('.main-content');
    var listSizeSelect = document.getElementById('listSize');
    var sortColumnSelect = document.getElementById('sortColumn');
    var sortButton = document.getElementById('sortButton');
    var tableBody = document.querySelector('#treeTable tbody');
    var pagination = document.getElementById('pagination');

    var currentPage = 1;
    var rowsPerPage = parseInt(listSizeSelect.value);
    var sortColumn = sortColumnSelect.value;
    var sortOrder = 'asc';

    const mockTreeDetails = [
        {
            id: 1,
            qr_id: 'QR001',
            name: 'Oak Tree',
            lat: '40.7128° N',
            long: '74.0060° W',
            date_updated: '2024-06-01',
            time: '10:00 AM',
            place: 'City Park',
            surveyor: 'John Doe',
            girth: '5 ft',
            height: '20 ft',
            age: '50 years',
            tree_canopy: 'Large',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'Red',
            flowering_season: 'Spring',
            short_description: 'Tall oak tree with broad canopy.'
        },
        {
            id: 2,
            qr_id: 'QR002',
            name: 'Maple Tree',
            lat: '42.3601° N',
            long: '71.0589° W',
            date_updated: '2024-06-02',
            time: '11:00 AM',
            place: 'Boston Common',
            surveyor: 'Jane Smith',
            girth: '6 ft',
            height: '25 ft',
            age: '60 years',
            tree_canopy: 'Medium',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'Yellow',
            flowering_season: 'Fall',
            short_description: 'Maple tree with vibrant autumn leaves.'
        },
        {
            id: 3,
            qr_id: 'QR003',
            name: 'Pine Tree',
            lat: '37.7749° N',
            long: '122.4194° W',
            date_updated: '2024-06-03',
            time: '12:00 PM',
            place: 'Golden Gate Park',
            surveyor: 'Mike Johnson',
            girth: '4 ft',
            height: '30 ft',
            age: '70 years',
            tree_canopy: 'Narrow',
            ownership: 'Private',
            condition: 'Healthy',
            flower_property: 'None',
            flowering_season: 'None',
            short_description: 'Tall pine tree with slender canopy.'
        },
        {
            id: 4,
            qr_id: 'QR004',
            name: 'Birch Tree',
            lat: '34.0522° N',
            long: '118.2437° W',
            date_updated: '2024-06-04',
            time: '1:00 PM',
            place: 'Griffith Park',
            surveyor: 'Emma Davis',
            girth: '3 ft',
            height: '15 ft',
            age: '40 years',
            tree_canopy: 'Small',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'White',
            flowering_season: 'Spring',
            short_description: 'Small birch tree with white bark.'
        },
        {
            id: 5,
            qr_id: 'QR005',
            name: 'Cedar Tree',
            lat: '51.5074° N',
            long: '0.1278° W',
            date_updated: '2024-06-05',
            time: '2:00 PM',
            place: 'Hyde Park',
            surveyor: 'Oliver Wilson',
            girth: '7 ft',
            height: '35 ft',
            age: '80 years',
            tree_canopy: 'Wide',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'None',
            flowering_season: 'None',
            short_description: 'Large cedar tree with extensive canopy.'
        },
        {
            id: 6,
            qr_id: 'QR006',
            name: 'Willow Tree',
            lat: '48.8566° N',
            long: '2.3522° E',
            date_updated: '2024-06-06',
            time: '3:00 PM',
            place: 'Bois de Boulogne',
            surveyor: 'Sophia Brown',
            girth: '8 ft',
            height: '40 ft',
            age: '90 years',
            tree_canopy: 'Drooping',
            ownership: 'Private',
            condition: 'Healthy',
            flower_property: 'Green',
            flowering_season: 'Summer',
            short_description: 'Weeping willow with long drooping branches.'
        },
        {
            id: 7,
            qr_id: 'QR007',
            name: 'Cherry Blossom',
            lat: '35.6895° N',
            long: '139.6917° E',
            date_updated: '2024-06-07',
            time: '4:00 PM',
            place: 'Ueno Park',
            surveyor: 'Liam Martinez',
            girth: '2 ft',
            height: '12 ft',
            age: '30 years',
            tree_canopy: 'Round',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'Pink',
            flowering_season: 'Spring',
            short_description: 'Beautiful cherry blossom tree with pink flowers.'
        },
        {
            id: 8,
            qr_id: 'QR008',
            name: 'Baobab Tree',
            lat: '18.0731° S',
            long: '15.9658° E',
            date_updated: '2024-06-08',
            time: '5:00 PM',
            place: 'Etosha National Park',
            surveyor: 'Ethan Garcia',
            girth: '10 ft',
            height: '50 ft',
            age: '200 years',
            tree_canopy: 'Massive',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'White',
            flowering_season: 'Summer',
            short_description: 'Ancient baobab tree with massive trunk.'
        },
        {
            id: 9,
            qr_id: 'QR009',
            name: 'Redwood Tree',
            lat: '36.7783° N',
            long: '119.4179° W',
            date_updated: '2024-06-09',
            time: '6:00 PM',
            place: 'Sequoia National Park',
            surveyor: 'Charlotte Hernandez',
            girth: '15 ft',
            height: '100 ft',
            age: '1000 years',
            tree_canopy: 'Towering',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'None',
            flowering_season: 'None',
            short_description: 'Giant redwood tree with towering height.'
        },
        {
            id: 10,
            qr_id: 'QR010',
            name: 'Palm Tree',
            lat: '25.7617° N',
            long: '80.1918° W',
            date_updated: '2024-06-10',
            time: '7:00 PM',
            place: 'South Beach',
            surveyor: 'Amelia Moore',
            girth: '1 ft',
            height: '10 ft',
            age: '20 years',
            tree_canopy: 'Narrow',
            ownership: 'Private',
            condition: 'Healthy',
            flower_property: 'None',
            flowering_season: 'None',
            short_description: 'Tall palm tree commonly found near beaches.'
        },
        {
            id: 11,
            qr_id: 'QR011',
            name: 'Cypress Tree',
            lat: '43.7696° N',
            long: '11.2558° E',
            date_updated: '2024-06-11',
            time: '8:00 PM',
            place: 'Tuscany',
            surveyor: 'James Lee',
            girth: '3 ft',
            height: '15 ft',
            age: '100 years',
            tree_canopy: 'Tall and Narrow',
            ownership: 'Public',
            condition: 'Healthy',
            flower_property: 'None',
            flowering_season: 'None',
            short_description: 'Elegant cypress tree commonly found in Italian landscapes.'
        }
    ];


    function populateTableWithMockData() {
        tableBody.innerHTML = '';
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const rows = mockTreeDetails.slice(start, end);

        rows.forEach(tree => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tree.id}</td>
                <td>${tree.qr_id}</td>
                <td>${tree.name}</td>
                <td>${tree.lat}</td>
                <td>${tree.long}</td>
                <td>${tree.date_updated}</td>
                <td>${tree.time}</td>
                <td>${tree.place}</td>
                <td>${tree.surveyor}</td>
                <td>${tree.girth}</td>
                <td>${tree.height}</td>
                <td>${tree.age}</td>
                <td>${tree.tree_canopy}</td>
                <td>${tree.ownership}</td>
                <td>${tree.condition}</td>
                <td>${tree.flower_property}</td>
                <td>${tree.flowering_season}</td>
                <td>${tree.short_description}</td>
                <td>
                    <i class="fas fa-trash-alt delete-icon"></i>&nbsp;
                    <i class="fas fa-edit edit-icon"></i>
                </td>
            `;
            tableBody.appendChild(row);

            const deleteIcon = row.querySelector('.delete-icon');
            deleteIcon.addEventListener('click', function() {
                row.remove();
            });

            const editIcon = row.querySelector('.edit-icon');
            editIcon.addEventListener('click', function() {
                for (const key in tree) {
                    if (tree.hasOwnProperty(key) && key !== 'id' && key !== 'lat' && key !== 'long' && key !== 'qr_id') {
                        let newValue;
                        do {
                            newValue = prompt(`Enter the new ${key.replace('_', ' ')}:`, tree[key]);
                            if (newValue === null) return;
                        } while (!validateInput(key, newValue));
                        if (newValue.trim() !== '') {
                            tree[key] = newValue;
                            row.cells[Object.keys(tree).indexOf(key)].textContent = newValue;
                        }
                    }
                }
            });
        });
    }

    function validateInput(key, value) {
        switch (key) {
            case 'date_updated':
                if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    alert('Please enter the date in the correct format (YYYY-MM-DD)');
                    return false;
                }
                return true;
            case 'time':
                if (!/^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i.test(value)) {
                    alert('Please enter the time in the correct format (HH:MM AM/PM)');
                    return false;
                }
                return true;
            case 'girth':
            case 'height':
            case 'age':
                if (!/^\d+(\.\d+)? (ft|years)$/.test(value)) {
                    alert('Please enter the measurement in the correct format (e.g., 5 ft, 20 ft, 50 years)');
                    return false;
                }
                return true;
            default:
                return true;
        }
    }

    function displayPagination() {
        pagination.innerHTML = '';
        const pageCount = Math.ceil(mockTreeDetails.length / rowsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.add('pagination-button'); // Add a common class for styling
            if (i === currentPage) {
                pageButton.classList.add('active');
            } else {
                pageButton.classList.add('inactive');
            }
            pageButton.addEventListener('click', () => {
                // Get all pagination buttons
                const buttons = document.querySelectorAll('.pagination-button');
                // Loop through all buttons to update their classes
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.add('inactive');
                });
                // Set the clicked button to active
                pageButton.classList.remove('inactive');
                pageButton.classList.add('active');
                // Update currentPage to the clicked page
                currentPage = i;
                populateTableWithMockData();
            });
            pagination.appendChild(pageButton);
        }
    }
    
    
    
    

    function sortTable() {
        mockTreeDetails.sort((a, b) => {
            let compareA = a[sortColumn];
            let compareB = b[sortColumn];
            if (sortOrder === 'asc') {
                return compareA > compareB ? 1 : -1;
            } else {
                return compareA < compareB ? 1 : -1;
            }
        });
        populateTableWithMockData();
    }

    openBtn.addEventListener('click', function() {
        drawer.style.width = '250px';
        mainContent.classList.add('drawer-open');
        document.getElementById('openBtn').style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        drawer.style.width = '0';
        mainContent.classList.remove('drawer-open');
        setTimeout(function() {
            document.getElementById('openBtn').style.display = 'block';
        }, 50);
    });

    listSizeSelect.addEventListener('change', function() {
        rowsPerPage = parseInt(listSizeSelect.value);
        populateTableWithMockData();
        displayPagination();
    });

    sortButton.addEventListener('click', function() {
        sortColumn = sortColumnSelect.value;
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        sortTable();
    });

    populateTableWithMockData();
    displayPagination();

    const columnSelector = document.getElementById('columnSelector');
    for (const key in mockTreeDetails[0]) {
        if (mockTreeDetails[0].hasOwnProperty(key) && key !== 'id') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = key;
            checkbox.checked = true;
            checkbox.addEventListener('change', function() {
                toggleColumnVisibility(key, this.checked);
            });

            const label = document.createElement('label');
            label.htmlFor = key;
            label.textContent = key.replace('_', ' ');

            columnSelector.appendChild(checkbox);
            columnSelector.appendChild(label);
            columnSelector.appendChild(document.createElement('br'));
        }
    }

    function toggleColumnVisibility(columnName, isVisible) {
        const columnIndex = Object.keys(mockTreeDetails[0]).indexOf(columnName);
        const rows = document.querySelectorAll('#treeTable tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td, th');
            if (isVisible) {
                cells[columnIndex].style.display = '';
            } else {
                cells[columnIndex].style.display = 'none';
            }
        });
    }
});
