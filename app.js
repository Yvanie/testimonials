(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#Customer-text')
    const btn = document.querySelectorAll('.btn')

    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }
    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer (Img, name, text)
        customers.push(customer)
    }
    createCustomer(1, 'Yvanie', 'Yvanie Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque ducimus quae voluptas pariatur quidem, aperiam et qui ratione enim maxime expedita eum odit maiores nihil officia reprehenderit iure quia consectetur')
    createCustomer(2, 'James', 'James Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque ducimus quae voluptas pariatur quidem, aperiam et qui ratione enim maxime expedita eum odit maiores nihil officia reprehenderit iure quia consectetur')
    createCustomer(3, 'Rosalie', 'Rosalie Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque ducimus quae voluptas pariatur quidem, aperiam et qui ratione enim maxime expedita eum odit maiores nihil officia reprehenderit iure quia consectetur')

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})();