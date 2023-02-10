import Menu from "./Menu"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    )
}
