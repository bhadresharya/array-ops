let artists = [
    'John White Abbott',
    'Leonardo da Vinci',
    'Charles Aubry',
    'Anna Atkins',
    'Barent Avercamp'
];

let sorted = artists.sort();

console.log('Sort the artist names', sorted);

artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
});

console.log('Sort the artist names(Descending)', artists);