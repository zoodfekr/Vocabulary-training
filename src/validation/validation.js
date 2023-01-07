import * as Yup from "yup";

export const tranclateSchema = Yup.object().shape({
	english: Yup.string("کلمه را وارد نمائید").required("نوشتن کلمه الزامی است"),
	persian: Yup.string("معنی را صحیح وارد نمائید"),
});


