import Menu from "./Menu.jsx";

export default function Layout({ children }) {
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    );
}
