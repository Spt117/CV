export default function Stack(): JSX.Element {
    return (
        <div id="Stack">
            <table>
                <caption>Mes technologies</caption>
                <thead>
                    <tr>
                        <th colSpan={1}>Front-End</th>
                        <th colSpan={1}>Back-End</th>
                        <th colSpan={1}>Blockchain</th>
                        <th colSpan={1}>CMS</th>
                        <th colSpan={1}>Production</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML5 / CSS3</td>
                        <td>Javascript / TypeScript</td>
                        <td>Solidity</td>
                        <td>Shopify</td>
                        <td>Github</td>
                    </tr>
                    <tr>
                        <td>FlexBox / Bootstrap</td>
                        <td>Node / Express js</td>
                        <td>HardHat / Truffle</td>
                        <td>WordPress</td>
                        <td>Vercel</td>
                    </tr>
                    <tr>
                        <td>Javascript / TypeScript</td>
                        <td>Next js</td>
                        <td>Ether js / Web3 js</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>React / Redux</td>
                        <td>MongoDB</td>
                        <td>Oracle Chainlink</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Standards Oppen Zeppelin</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
