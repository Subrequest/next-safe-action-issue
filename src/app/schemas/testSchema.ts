import { zfd } from "zod-form-data";
import { z } from "zod";

export const testSchema = zfd.formData({ "name[first]": z.string().min(1) });
