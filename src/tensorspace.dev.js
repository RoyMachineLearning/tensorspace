/**
 * @author syt123450 / https://github.com/syt123450
 */

import { Sequential } from "./tsp-model/Sequential";
import { Model } from "./tsp-model/Model";

import { Conv1d } from "./layer/intermediate/Conv1d";
import { Conv2d } from "./layer/intermediate/Conv2d";
import { Conv2dTranspose } from "./layer/intermediate/Conv2dTranspose";
import { DepthwiseConv2d } from "./layer/intermediate/DepthwiseConv2d";
import { Cropping1d } from "./layer/intermediate/Cropping1d";
import { Cropping2d } from "./layer/intermediate/Cropping2d";
import { Input1d } from "./layer/input/Input1d";
import { GreyscaleInput } from "./layer/input/GreyscaleInput";
import { RGBInput } from "./layer/input/RGBInput";
import { Output1d } from "./layer/output/Output1d";
import { OutputDetection } from "./layer/output/OutputDetection";
import { YoloGrid } from "./layer/output/YoloGrid";
import { Flatten } from "./layer/intermediate/Flatten";
import { Pooling1d } from "./layer/intermediate/Pooling1d";
import { Pooling2d } from "./layer/intermediate/Pooling2d";
import { Reshape } from "./layer/intermediate/Reshape";
import { Dense } from "./layer/intermediate/Dense";
import { Padding1d } from "./layer/intermediate/Padding1d";
import { Padding2d } from "./layer/intermediate/Padding2d";
import { UpSampling1d } from "./layer/intermediate/UpSampling1d";
import { UpSampling2d } from "./layer/intermediate/UpSampling2d";
import { GlobalPooling1d } from "./layer/intermediate/GlobalPooling1d";
import { GlobalPooling2d } from "./layer/intermediate/GlobalPooling2d";
import { BasicLayer1d } from "./layer/intermediate/BasicLayer1d";
import { BasicLayer2d } from "./layer/intermediate/BasicLayer2d";
import { BasicLayer3d } from "./layer/intermediate/BasicLayer3d";
import { Activation1d } from "./layer/intermediate/Activation1d";
import { Activation2d } from "./layer/intermediate/Activation2d";
import { Activation3d } from "./layer/intermediate/Activation3d";

import { Add } from "./merge/Add";
import { Concatenate } from "./merge/Concatenate";
import { Subtract } from "./merge/Subtract";
import { Maximum } from "./merge/Maximum";
import { Average } from "./merge/Average";
// import { Dot } from "./merge/Dot";
import { Multiply } from "./merge/Multiply";

import { KerasLoader } from "./loader/KerasLoader";
import { TfjsLoader } from "./loader/TfjsLoader";
import { TfLoader } from "./loader/TfLoader";
import { LiveLoader } from "./loader/LiveLoader";

import { KerasPredictor } from "./predictor/KerasPredictor";
import { TfjsPredictor } from "./predictor/TfjsPredictor";
import { TfPredictor } from "./predictor/TfPredictor";
import { LivePredictor } from "./predictor/LivePredictor";

import { ModelConfiguration } from "./configure/ModelConfiguration";

import { ActualDepthCalculator } from "./utils/ActualDepthCalculator";
import { CenterLocator } from "./utils/CenterLocator";
import { ChannelDataGenerator } from "./utils/ChannelDataGenerator";
import { ColorUtils } from "./utils/ColorUtils";
import { FmCenterGenerator } from "./utils/FmCenterGenerator";
import { InLevelAligner } from "./utils/InLevelAligner";
import { LayerLocator } from "./utils/LayerLocator";
import { LayerStackGenerator } from "./utils/LayerStackGenerator";
import { LevelStackGenerator } from "./utils/LevelStackGenerator";
import { MathUtils } from "./utils/MathUtils";
import { MergeValidator } from "./utils/MergeValidator";
import { MouseCaptureHelper } from "./utils/MouseCapturer";
import { OutputExtractor } from "./utils/OutputExtractor";
import { OutputNeuralPosGenerator } from "./utils/OutputNeuralPosGenerator";
import { QueueCenterGenerator } from "./utils/QueueCenterGenerator";
import { RenderPreprocessor } from "./utils/RenderPreprocessor";
import { TextHelper } from "./utils/TextHelper";
import { TextureProvider } from "./utils/TextureProvider";
import { YoloResultGenerator } from "./utils/YoloResultGenerator";

let layers = {

	Input1d: Input1d,
	GreyscaleInput: GreyscaleInput,
	RGBInput: RGBInput,
	Output1d: Output1d,
	OutputDetection: OutputDetection,
	YoloGrid: YoloGrid,
	Conv1d: Conv1d,
	Conv2d: Conv2d,
	Conv2dTranspose: Conv2dTranspose,
	DepthwiseConv2d: DepthwiseConv2d,
	Cropping1d: Cropping1d,
	Cropping2d: Cropping2d,
	Dense: Dense,
	Flatten: Flatten,
	Reshape: Reshape,
	Pooling1d: Pooling1d,
	Pooling2d: Pooling2d,
	Padding1d: Padding1d,
	Padding2d: Padding2d,
	GlobalPooling1d: GlobalPooling1d,
	GlobalPooling2d: GlobalPooling2d,
	UpSampling1d: UpSampling1d,
	UpSampling2d: UpSampling2d,
	Layer1d: BasicLayer1d,
	Layer2d: BasicLayer2d,
	Layer3d: BasicLayer3d,
	Activation1d: Activation1d,
	Activation2d: Activation2d,
	Activation3d: Activation3d,

	Add: Add,
	Concatenate: Concatenate,
	Subtract: Subtract,
	// Dot: Dot,
	Multiply: Multiply,
	Average: Average,
	Maximum: Maximum

};

let models = {

	Sequential: Sequential,
	Model: Model

};

let loaders = {
	KerasLoader: KerasLoader,
	TfjsLoader: TfjsLoader,
	TfLoader: TfLoader,
	LiveLoader: LiveLoader
};

let predictors = {
	KerasPredictor: KerasPredictor,
	TfjsPredictor: TfjsPredictor,
	TfPredictor: TfPredictor,
	LivePredictor: LivePredictor
};

let utils = {
	ActualDepthCalculator: ActualDepthCalculator,
	CenterLocator: CenterLocator,
	ChannelDataGenerator: ChannelDataGenerator,
	ColorUtils: ColorUtils,
	FmCenterGenerator: FmCenterGenerator,
	InLevelAligner: InLevelAligner,
	LayerLocator: LayerLocator,
	LayerStackGenerator: LayerStackGenerator,
	LevelStackGenerator: LevelStackGenerator,
	MathUtils: MathUtils,
	MergeValidator: MergeValidator,
	MouseCaptureHelper: MouseCaptureHelper,
	OutputExtractor: OutputExtractor,
	OutputNeuralPosGenerator: OutputNeuralPosGenerator,
	QueueCenterGenerator: QueueCenterGenerator,
	RenderPreprocessor: RenderPreprocessor,
	TextHelper: TextHelper,
	TextureProvider: TextureProvider,
	YoloResultGenerator: YoloResultGenerator
};

let version = "0.3.0";

export { models, layers, loaders, predictors, utils, version, ModelConfiguration };