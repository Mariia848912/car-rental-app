import { AdvertsListItem } from "../AdvertsListItem/AdvertsListItem"

export const AdvertsList = (adverts) => {
    return (
        <>
            <div>{adverts.map(({ id }) => (
                <AdvertsListItem key={id} />
            ))} </div> 
        </>
    )
}