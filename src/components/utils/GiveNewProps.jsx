export default async function GiveNewProps(data) {
    return data.map(item => ({...item, price: 2, isInCart: false}))
}