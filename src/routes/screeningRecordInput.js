import { useContext } from "react";
import BrowserWindow from "../browserWindow";
import Card from "../components/card/card";
import GlobalContext from "../global";

const ScreeningRecordInput = () => {

    const { locale, text } = useContext(GlobalContext);

    return <BrowserWindow>
        <Card>
            <table>
                <tr><th colSpan={4}>{text.screening_record.step1.title[locale]}</th></tr>
                <tr>
                    <td>{text.screening_record.step1.card[locale]}</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>{text.screening_record.step1.name[locale]}</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>{text.screening_record.step1.dob[locale]}</td>
                    <td></td>
                    <td>{text.screening_record.step1.age[locale]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{text.screening_record.step1.sex[locale]}</td>
                    <td></td>
                    <td>{text.screening_record.step1.contact[locale]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{text.screening_record.step1.address[locale]}</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>{text.screening_record.step1.past[locale]}</td>
                    <td colSpan={3}></td>
                </tr>
            </table>
        </Card>
    </BrowserWindow>
}

export default ScreeningRecordInput;