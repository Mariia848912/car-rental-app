import { Link, NavList } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <NavList>
  <Link to="/">Home</Link >
  <Link to="/catalog">Catalog</Link >
  <Link to="/favorites">Favorites</Link >
</NavList>
    )
}
