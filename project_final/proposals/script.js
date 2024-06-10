document.addEventListener('DOMContentLoaded', function() {
    // Drawer functionality
    var openBtn = document.getElementById('openBtn');
    var closeBtn = document.getElementById('closeBtn');
    var drawer = document.getElementById('drawer');
    var mainContent = document.querySelector('.main-content');
    
    openBtn.addEventListener('click', function() {
        drawer.style.width = '250px';
        mainContent.classList.add('drawer-open');
    });

    closeBtn.addEventListener('click', function() {
        drawer.style.width = '0';
        mainContent.classList.remove('drawer-open');
    });

    // Dropdown functionality
    const dropdownBtn = document.querySelector('.down');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Mock function to get proposal data
    function getProposals() {
        return [
            { requestId: 'REQ123', name: 'John Doe', treeId: 'TREE456', typeOfRequest: 'Plant', reason: 'Beautification', status: 'Pending' },
            { requestId: 'REQ124', name: 'Jane Smith', treeId: 'TREE457', typeOfRequest: 'Remove', reason: 'Safety', status: 'Pending' },
            { requestId: 'REQ125', name: 'Bob Johnson', treeId: 'TREE458', typeOfRequest: 'Trim', reason: 'Growth Control', status: 'Pending' },
            { requestId: 'REQ126', name: 'John Doe', treeId: 'TREE459', typeOfRequest: 'Plant', reason: 'Beautification', status: 'Pending' },
            { requestId: 'REQ127', name: 'Jane Smith', treeId: 'TREE460', typeOfRequest: 'Remove', reason: 'Safety', status: 'Pending' },
            { requestId: 'REQ128', name: 'Bob Johnson', treeId: 'TREE461', typeOfRequest: 'Trim', reason: 'Growth Control', status: 'Pending' }
        ];
    }

    // Function to create and add proposal boxes
    function createProposalBox(proposal) {
        // Create proposal box
        const proposalBox = document.createElement('div');
        proposalBox.classList.add('proposal-box');
        proposalBox.innerHTML = `
            <p><strong>Request ID:</strong> ${proposal.requestId}</p>
            <p><strong>Name:</strong> ${proposal.name}</p>
            <p><strong>Tree ID:</strong> ${proposal.treeId}</p>
            <p><strong>Type of Request:</strong> ${proposal.typeOfRequest}</p>
            <p><strong>Reason:</strong> ${proposal.reason}</p>
            <p><strong>Status:</strong> ${proposal.status}</p>
            <div class="buttons">
                <button class="accept-btn">Accept</button>
                <button class="decline-btn">Decline</button>
            </div>
        `;

        // Add event listeners to the buttons
        const acceptButton = proposalBox.querySelector('.accept-btn');
        const declineButton = proposalBox.querySelector('.decline-btn');
    
        acceptButton.addEventListener('click', function() {
            if (confirm(`Are you sure you want to accept the proposal with Request ID ${proposal.requestId}?`)) {
                alert(`Proposal with Request ID ${proposal.requestId} accepted.`);
                proposal.status = 'Accepted';
                addRowToTable(proposal);
                removeProposalBox(proposalBox);
            }
        });
    
        declineButton.addEventListener('click', function() {
            if (confirm(`Are you sure you want to decline the proposal with Request ID ${proposal.requestId}?`)) {
                alert(`Proposal with Request ID ${proposal.requestId} declined.`);
                proposal.status = 'Declined';
                addRowToTable(proposal);
                removeProposalBox(proposalBox);
            }
        });
    
        return proposalBox;
    }

    // Function to remove a proposal box
    function removeProposalBox(proposalBox) {
        proposalBox.remove();
    }

    // Function to update the proposal table
    function addRowToTable(proposal) {
        const proposalTableBody = document.querySelector('#proposalTable tbody');
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${proposal.requestId}</td>
            <td>${proposal.name}</td>
            <td>${proposal.treeId}</td>
            <td>${proposal.typeOfRequest}</td>
            <td>${proposal.reason}</td>
            <td>${proposal.status}</td>
        `;
        proposalTableBody.appendChild(tableRow);
    }

    // Function to initialize the proposal list
    function initializeProposals() {
        const proposals = getProposals();
        const proposalWrapper = document.getElementById('proposalWrapper');
        proposals.forEach(proposal => {
            const proposalBox = createProposalBox(proposal);
            proposalWrapper.appendChild(proposalBox);
        });
    }

    // Initialize proposals on page load
    initializeProposals();

    // Navbar fixed on scroll functionality
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.classList.add('fixed');
        } else {
            // Scroll up
            if (scrollTop === 0) {
                navbar.classList.remove('fixed');
            }
        }

        lastScrollTop = scrollTop;
    });
});
