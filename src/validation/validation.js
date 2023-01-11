import * as Yup from "yup";

export const tranclateSchema = Yup.object().shape({
	english: Yup.string("کلمه را وارد نمائید"),
	persian: Yup.string("معنی را صحیح وارد نمائید"),
});


