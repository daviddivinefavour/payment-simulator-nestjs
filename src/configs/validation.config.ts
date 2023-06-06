import { ValidatorOptions } from 'class-validator';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  enableDebugMessages: boolean;
  whitelist?: boolean;
  validationError?: { target: boolean; value: boolean };
}

const validationConfig: ValidationPipeOptions = {
  transform: true,
  disableErrorMessages: false,
  enableDebugMessages: true,
  whitelist: true,
  validationError: { target: true, value: true },
};

export default validationConfig;
