async function getResults(searchParams) {
    // FILTER PART
    const city = searchParams.get('city')
        ? 'area=' + searchParams.get('city')
        : '';
        
    const startDate = searchParams.get('startDate');
    const startParamsDate = new Date(startDate);
    const startYear = startParamsDate.getFullYear();
    const startMonth =
        startParamsDate.getMonth() + 1 <= 9
            ? '0' + (startParamsDate.getMonth() + 1)
            : startParamsDate.getMonth() + 1;
    const startDay =
        startParamsDate.getDate() <= 9
            ? '0' + startParamsDate.getDate()
            : startParamsDate.getDate();
    const start = startYear + '-' + startMonth + '-' + startDay;


    const endDate = searchParams.get('endDate');
    const endParamsDate = new Date(endDate);
    const endYear = endParamsDate.getFullYear();
    const endMonth =
        endParamsDate.getMonth() + 1 <= 9
            ? '0' + (endParamsDate.getMonth() + 1)
            : endParamsDate.getMonth() + 1;
    const endDay =
        endParamsDate.getDate() <= 9
            ? '0' + endParamsDate.getDate()
            : endParamsDate.getDate();
    const end = endYear + '-' + endMonth + '-' + endDay;

    const dates = 'checkIn_gte=' + start + '&checkOut_lte=' + end;


    const prop = searchParams.get('search')
        ? 'title_like=' + searchParams.get('search')
        : '';

    const adults = searchParams.get('adults');
    const min = +(searchParams.get('minValue') ?? 80) / adults;
    const max = +(searchParams.get('maxValue') ?? 500) / adults;
    const budget = `price_gte=${min}&price_lte=${max}`;

    const rating = searchParams.get('rating');
    const rating1 = rating === 'rating1' ? 'rating_gte=1&rating_lte=10' : '';
    const rating2 = rating === 'rating2' ? 'rating_gte=9' : '';
    const rating3 = rating === 'rating3' ? 'rating_gte=8&rating_lte=9' : '';
    const rating4 = rating === 'rating4' ? 'rating_gte=7&rating_lte=8' : '';

    const star1 = searchParams.get('star1') ? 'propClass=1' : '';
    const star2 = searchParams.get('star2') ? 'propClass=2' : '';
    const star3 = searchParams.get('star3') ? 'propClass=3' : '';
    const star4 = searchParams.get('star4') ? 'propClass=4' : '';
    const star5 = searchParams.get('star5') ? 'propClass=5' : '';

    const payment1 = searchParams.get('payment1')
        ? 'paymentType_like=Fully'
        : '';
    const payment2 = searchParams.get('payment2')
        ? 'paymentType_like=Reserve'
        : '';

    const meal1 = searchParams.get('meal1') ? 'mealPlans_like=breakfast' : '';
    const meal2 = searchParams.get('meal2') ? 'mealPlans_like=lunch' : '';
    const meal3 = searchParams.get('meal3') ? 'mealPlans_like=dinner' : '';

    // SORTING PART

    const selectedSort = searchParams.get('sortBy') ?? 'recommended';
    const recommended =
        selectedSort === 'recommended' ? '_sort=rating&_order=desc' : '';
    const price = selectedSort === 'price' ? '_sort=price&_order=asc' : '';
    const name = selectedSort === 'name' ? '_sort=title&_order=asc' : '';
    const propClass =
        selectedSort === 'class' ? '_sort=propClass&_order=desc' : '';

    // PAGINATION'

    const page = searchParams.get('page') ?? 1;
    const pagination = `_page=${page}&_limit=3`;

    const url =
        `http://localhost:3000/hotels?` +
        `${city}` +
        `&${dates}` +
        `${prop && '&' + prop}` +
        `&${budget}` +
        `${rating1 && '&' + rating1}${rating2 && '&' + rating2}` +
        `${rating3 && '&' + rating3}${rating4 && '&' + rating4}` +
        `${star1 && '&' + star1}${star2 && '&' + star2}${
            star3 && '&' + star3
        }` +
        `${star4 && '&' + star4}${star5 && '&' + star5}` +
        `${payment1 && '&' + payment1}${payment2 && '&' + payment2}` +
        `${meal1 && '&' + meal1}${meal2 && '&' + meal2}` +
        `${meal3 && '&' + meal3}` +
        `${recommended && '&' + recommended}${price && '&' + price}` +
        `${name && '&' + name}${propClass && '&' + propClass}`;

    const allHotels = await fetch(url);
    let count = (await allHotels.json()).length;

    const urlPaged = url + `&${pagination}`;
    const response = await fetch(urlPaged);
    const hotels = await response.json();

    return { hotels, count };
}

async function getHotelById(hotelId) {
    const url = `http://localhost:3000/hotels?id=${hotelId}`;
    const response = await fetch(url);
    const hotel = response.json();
    return hotel;
}

async function getRoomsById(hotelId = 1) {
    const url = `http://localhost:3000/rooms?hotelId=${hotelId}`;
    const response = await fetch(url);
    const rooms = response.json();
    return rooms;
}

async function addNewHotel(hotel) {
    console.log(hotel)
    const response = await fetch('http://localhost:3000/hotels', {
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify(hotel)
        } 
    )
    const data = await response.json();
    console.log(data)
    return data
}

export { getHotelById, getRoomsById, getResults, addNewHotel };
