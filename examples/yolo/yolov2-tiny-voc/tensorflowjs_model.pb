
4
mul_7/xConst*
valueB
 *ΝΜΜ=*
dtype0
?
VariableConst*
valueB*
dtype0
5

Variable_1Const*
value
B*
dtype0
A

Variable_2Const*
valueB *
dtype0
5

Variable_3Const*
value
B *
dtype0
A

Variable_4Const*
dtype0*
valueB @
5

Variable_5Const*
value
B@*
dtype0
B

Variable_6Const*
dtype0* 
valueB@
6

Variable_7Const*
valueB	*
dtype0
C

Variable_8Const*!
valueB*
dtype0
6

Variable_9Const*
valueB	*
dtype0
D
Variable_10Const*
dtype0*!
valueB
7
Variable_11Const*
valueB	*
dtype0
D
Variable_12Const*!
valueB*
dtype0
7
Variable_13Const*
valueB	*
dtype0
D
Variable_14Const*!
valueB*
dtype0
7
Variable_15Const*
valueB	*
dtype0
C
Variable_16Const* 
valueB}*
dtype0
6
Variable_17Const*
dtype0*
value
B}
L
input/PlaceholderPlaceholder*
dtype0*
shape:  
€
Conv2DConv2Dinput/PlaceholderVariable*
paddingSAME*
	dilations
*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(
'
addAddConv2D
Variable_1*
T0
!
mulMulmul_7/xadd*
T0
%
MaximumMaximummuladd*
T0
w
MaxPoolMaxPoolMaximum*
ksize
*
paddingVALID*
T0*
data_formatNHWC*
strides


Conv2D_1Conv2DMaxPool
Variable_2*
paddingSAME*
	dilations
*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(
+
add_1AddConv2D_1
Variable_3*
T0
%
mul_1Mulmul_7/xadd_1*
T0
+
	Maximum_1Maximummul_1add_1*
T0
{
	MaxPool_1MaxPool	Maximum_1*
ksize
*
paddingVALID*
T0*
strides
*
data_formatNHWC
 
Conv2D_2Conv2D	MaxPool_1
Variable_4*
	dilations
*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(*
paddingSAME
+
add_2AddConv2D_2
Variable_5*
T0
%
mul_2Mulmul_7/xadd_2*
T0
+
	Maximum_2Maximummul_2add_2*
T0
{
	MaxPool_2MaxPool	Maximum_2*
ksize
*
paddingVALID*
T0*
data_formatNHWC*
strides

 
Conv2D_3Conv2D	MaxPool_2
Variable_6*
	dilations
*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(*
paddingSAME
+
add_3AddConv2D_3
Variable_7*
T0
%
mul_3Mulmul_7/xadd_3*
T0
+
	Maximum_3Maximummul_3add_3*
T0
{
	MaxPool_3MaxPool	Maximum_3*
ksize
*
paddingVALID*
T0*
data_formatNHWC*
strides

 
Conv2D_4Conv2D	MaxPool_3
Variable_8*
	dilations
*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(*
paddingSAME
+
add_4AddConv2D_4
Variable_9*
T0
%
mul_4Mulmul_7/xadd_4*
T0
+
	Maximum_4Maximummul_4add_4*
T0
{
	MaxPool_4MaxPool	Maximum_4*
ksize
*
paddingVALID*
T0*
data_formatNHWC*
strides

‘
Conv2D_5Conv2D	MaxPool_4Variable_10*
	dilations
*
T0*
strides
*
data_formatNHWC*
use_cudnn_on_gpu(*
paddingSAME
,
add_5AddConv2D_5Variable_11*
T0
%
mul_5Mulmul_7/xadd_5*
T0
+
	Maximum_5Maximummul_5add_5*
T0
z
	MaxPool_5MaxPool	Maximum_5*
ksize
*
paddingSAME*
T0*
strides
*
data_formatNHWC
‘
Conv2D_6Conv2D	MaxPool_5Variable_12*
T0*
strides
*
data_formatNHWC*
use_cudnn_on_gpu(*
paddingSAME*
	dilations

,
add_6AddConv2D_6Variable_13*
T0
%
mul_6Mulmul_7/xadd_6*
T0
+
	Maximum_6Maximummul_6add_6*
T0
‘
Conv2D_7Conv2D	Maximum_6Variable_14*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(*
paddingSAME*
	dilations

,
add_7AddConv2D_7Variable_15*
T0
%
mul_7Mulmul_7/xadd_7*
T0
+
	Maximum_7Maximummul_7add_7*
T0
‘
Conv2D_8Conv2D	Maximum_7Variable_16*
	dilations
*
T0*
data_formatNHWC*
strides
*
use_cudnn_on_gpu(*
paddingSAME
,
add_8AddConv2D_8Variable_17*
T0 " 