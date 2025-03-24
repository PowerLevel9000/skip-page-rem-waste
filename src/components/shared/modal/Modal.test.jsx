import { screen, render } from "@testing-library/react";
import Modal from "./Modal";
import { data } from "../../../utils/data";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Modal", () => {
    const mockStore = configureMockStore();
    let store;
    beforeEach(() => {
        store = mockStore({
            skipData: {
                skipData: data,
                model: true,
                selectedSkip: data[data.length - 1].id,
            },
        });
        render(
            <Provider store={store}>
                <Modal id={data[data.length - 1].id} />
            </Provider>
        );
    });

    it("renders Modal component", () => {
        const price = screen.getByText(RegExp(data[data.length - 1].price_before_vat, "i"));
        const area = screen.getByText(RegExp(data[data.length - 1].area, "i"));
        const size = screen.getByText(RegExp(data[data.length - 1].size, "i"));
        const vat = screen.getByText(RegExp(data[data.length - 1].vat, "i"));
        const transportCost = screen.getByText(RegExp(data[data.length - 1].transport_cost, "i"));
        expect(vat).toBeInTheDocument();
        expect(transportCost).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(area).toBeInTheDocument();
        expect(size).toBeInTheDocument();
    });

    it("should have close, selected and backdrop button", () => {
        const buttons = screen.getAllByRole("button");
        const buttonText = screen.getByText(/close/i);
        const selectButton = screen.getByText(/selected/i);
        expect(selectButton).toBeInTheDocument
        expect(buttonText).toBeInTheDocument();
        expect(buttons.length).toEqual(3);
    });

    it("should have image", () => {
        const image = screen.getByAltText("dump yard");
        expect(image).toBeInTheDocument();
    });
});