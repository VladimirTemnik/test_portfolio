import {defineRule} from "vee-validate";
import {min, max, required, email} from "@vee-validate/rules";

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('email', email);