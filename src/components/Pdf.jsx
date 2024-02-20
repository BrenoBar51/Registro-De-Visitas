import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";

export const PDF = () => {
    const html = `
        <table>
            <tr>
                <td>Total de visitantes: </td>
                <td>x</td>
            </tr>
            <tr>
                <td>Masculinos: </td>
                <td>x</td>
            </tr>
            <tr>
                <td>Femininos: </td>
                <td>x</td>
            </tr>
        </table
    `;
    const css = StyleSheet.create({
        page: {
            padding: 60
        },
        title: {
            color: "red"
        }
    });
    return (
        <Document>
            <Page size="A4" style={css.page}>
                <View>
                    <Html>
                        {html}
                    </Html>
                </View>
            </Page>
        </Document>
    );
}
