export default async function GiveNewProps(data) {
    return data.map(item => ({...item, price: 5.99, isInCart: false}))
}