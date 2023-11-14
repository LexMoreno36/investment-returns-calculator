document.addEventListener('DOMContentLoaded', function () {
    const investmentList = document.getElementById('investmentList');
    const addInvestmentForm = document.getElementById('addInvestmentForm');

    // Load existing investments from local storage
    const existingInvestments = JSON.parse(localStorage.getItem('investments')) || [];
    renderInvestments(existingInvestments);

    // Function to add a new investment
    window.addInvestment = function () {
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const purchaseDate = document.getElementById('purchaseDate').value;
        const category = document.getElementById('category').value;
    
        if (name && amount && purchaseDate && category) {
            const newInvestment = {
                Name: name,
                Amount: amount,
                PurchaseDate: purchaseDate,
                Category: category,
            };
    
            // Save the new investment to local storage
            existingInvestments.push(newInvestment);
            localStorage.setItem('investments', JSON.stringify(existingInvestments));
    
            // Clear the form fields
            addInvestmentForm.reset();
    
            // Update the displayed list of investments
            renderInvestments(existingInvestments);
        }
    };

    // Function to render the list of investments
    function renderInvestments(investments) {
        investmentList.innerHTML = '';
        investments.forEach(investment => {
            const listItem = document.createElement('li');
            listItem.textContent = `${investment.Name}: $${investment.Amount} (${investment.PurchaseDate})`;
            investmentList.appendChild(listItem);
        });
    }
});