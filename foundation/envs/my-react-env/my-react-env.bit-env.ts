/**
 * this env extends react-env version 0.0.68.
 * to inspect its config @see https://bit.cloud/teambit/react/react-env?version=0.0.68
 * */
import { ReactEnv } from "@teambit/react.react-env";
import { Compiler } from "@teambit/compiler";
import { EnvHandler } from "@teambit/envs";
import {
  TypescriptCompiler,
  resolveTypes,
  TypescriptTask
} from "@teambit/typescript.typescript-compiler";
import { JestTester, JestTask } from "@teambit/defender.jest-tester";
// import { BabelCompiler, BabelTask } from "@teambit/compilation.babel-compiler";
import { Tester } from "@teambit/tester";
// import { webpackTransformer } from './config/webpack.config';

export class GryppReactEnv extends ReactEnv {
  /* a shorthand name for the env */
  name = "grypp-react-env";

  /* the compiler to use during development */
  compiler(): EnvHandler<Compiler> {
    /**
     * @see https://bit.dev/reference/typescript/using-typescript
     * */
    return TypescriptCompiler.from({
      tsconfig: require.resolve("./config/tsconfig.json"),
      types: resolveTypes(__dirname, ["./types"])
    });
  }

  /* the test runner to use during development */
  tester(): EnvHandler<Tester> {
    /**
     * @see https://bit.dev/reference/jest/using-jest
     * */
    return JestTester.from({
      jest: require.resolve("jest"),
      config: require.resolve("./config/jest.config")
    });
  }

  /**
   * a set of processes to be performed before a component is snapped, during its build phase
   * @see https://bit.dev/docs/react-env/build-pipelines
   */
  build() {
    return super.build().replace([
      TypescriptTask.from({
        tsconfig: require.resolve("./config/tsconfig.json"),
        types: resolveTypes(__dirname, ["./types"])
      }),
      JestTask.from({
        config: require.resolve("./config/jest.config"),
        jest: require.resolve("jest")
      })
    ]);
  }
}

export default new GryppReactEnv();
