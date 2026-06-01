var ht=Object.defineProperty;var pt=(u,e,t)=>e in u?ht(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var T=(u,e,t)=>pt(u,typeof e!="symbol"?e+"":e,t);import{aa as ut,ac as mt,a9 as gt,ad as ft,ab as bt,ae as xt,af as vt,dK as wt,ag as yt,a5 as Tt,aD as Ct,fF as B,A as q,fG as kt,a2 as St,X as _t,fH as Bt,fI as Et,fJ as Mt,fK as Lt,U as It,V as Rt,a0 as He,fv as ze,fC as D,cK as de,aq as O,a4 as te,fL as le,fM as Ft,fN as Ee,fO as Te,dv as Nt,fP as zt,fQ as Dt,f1 as Pt,cJ as je,fR as Vt,fS as At,fT as Ot,fU as Wt,eP as Ut,fV as Ht,ds as jt,fW as Gt,fX as $t,cx as Xt,f0 as qt,fY as Yt,fZ as Zt,f_ as Qt,dy as Jt,dw as Kt,dx as ei,du as ti,f$ as ii,cN as ni,g0 as si,eO as ri,aZ as oi,g1 as ai,a$ as li,T as be,fu as ci,eS as di,aH as U}from"./index-BBbY6NWp.js";import{c as i,T as Ge,N as $e,R as G,Q as Me,a as P,I as hi,d as Xe,W as ue,e as pi,C as ui,S as De,f as mi}from"./three.webgpu-DgbXu7dy.js";class nm{constructor(e){T(this,"core");this.core=e}get render(){return this.core.render}get bloomEnable(){return this.core.render.pipeline.outputNode===this.core.render.bloomOutput}set bloomEnable(e){const t=this.core.render;t.pipeline.outputNode=e?t.bloomOutput:t.sceneOutput,t.pipeline.needsUpdate=!0}get bloomStrength(){return this.core.render.bloomPass.strength.value}set bloomStrength(e){this.core.render.bloomPass.strength.value=e}get bloomRadius(){return this.core.render.bloomPass.radius.value}set bloomRadius(e){this.core.render.bloomPass.radius.value=e}get bloomThreshold(){return this.core.render.bloomPass.threshold.value}set bloomThreshold(e){this.core.render.bloomPass.threshold.value=e}}const xe=Object.freeze({[B.Object3D]:()=>new Ct,[B.Group]:()=>new Tt,[B.Mesh]:()=>new yt,[B.Sprite]:()=>new wt,[B.PerspectiveCamera]:()=>new vt,[B.OrthographicCamera]:()=>new xt,[B.PointLight]:()=>new bt,[B.AmbientLight]:()=>new ft,[B.HemisphereLight]:()=>new gt,[B.DirectionalLight]:()=>new mt,[B.SpotLight]:()=>new ut,[B.Scene]:()=>null,[B.Bone]:()=>null,[B.SkinnedMesh]:()=>null}),gi=u=>{var t;const e=(t=xe[u])==null?void 0:t.call(xe);if(!e)throw new Error(`Unsupported object type: ${u}`);return e};function ce(u,e){let t=u;const n=e.split(".");if(n.length>1)for(let s=1;s<n.length;s++){const r=Number(n[s]);if(!t.children){console.error("parseItemFromIndexDotPath: `indicies.length > 1` but no `item.children` to define result item",{item:t,root:u,path:e});continue}const o=t.children[r];if(!o){console.error("parseItemFromIndexDotPath: `indicies.length > 1` but `item.children[index]` is undefined",{item:t,root:u,path:e});continue}t=o}return t}class sm{async restoreAssets(e,t){const n=e.map(s=>this.restoreAsset(s,t));return Promise.all(n)}async restoreAsset(e,t,n){const{type:s,uuid:r,meta:o,children:a}=e;let l;switch(s){case q.Folder:{l=Lt.create(void 0,r),t==null||t(l);for(const c of a||[])await this.restoreAsset(c,t,l);break}case q.Material:{l=Mt.create(o.type,r),t==null||t(l);break}case q.Geometry:{l=Et.create(o.type,r),t==null||t(l);break}case q.Texture:{l=await Bt.loadAsync(r),t==null||t(l);break}case q.Model:{l=await _t.loadAsync(r),t==null||t(l);break}case q.Script:{l=await St.loadAsync(r),t==null||t(l);break}case q.Audio:{l=await kt.loadAsync(r),t==null||t(l);break}default:throw new Error(`Unsupported asset type: ${s}`)}return n==null||n.add(l),l}restoreAssetsValues(e,t,n,s){for(let r=0;r<t.length;r++){const o=t[r],a=e[r];this.restoreValues(a.meta,o.source,n,s),o.children&&a.children&&this.restoreAssetsValues(a.children,o.children,n,s)}}restoreObjects(e,t,n,s){return e.map(o=>this.restoreObject(o,t,n,s)).filter(o=>o!==void 0)}restoreObject(e,t,n,s,r){const{uuid:o,type:a,children:l=[]}=e;let c;if(a==="Model"){const d=e,p=t(d.instance);if(!p){s==null||s(`Asset with uuid ${d.instance} not found`);return}c=p.create(),n==null||n(c);for(const h in d.overrides){const m=d.overrides[h],g=ce(c,h);g.uuid=m.uuid}for(const h in d.inserts){const m=d.inserts[h],g=ce(c,h);for(const f of m)this.restoreObject(f,t,n,s,g)}}else{c=gi(a),n==null||n(c);for(let d=0;d<l.length;d++){const p=l[d];this.restoreObject(p,t,n,s,c)}}return c.uuid=o,r==null||r.add(c),c}restoreObjectsValues(e,t,n,s,r){for(let o=0;o<t.length;o++){const a=t[o],l=e[o];if(l.type==="Model"){const c=l;for(const d in c.inserts){const p=ce(a,d),h=c.inserts[d];for(const m of h){const g=p.getObjectByProperty("uuid",m.uuid);g&&this.restoreObjectsValues([m],[g],n,s,r)}}for(const d in c.overrides){const p=ce(a,d),h=c.overrides[d],m=p.getObjectByProperty("uuid",h.uuid);m&&(this.restoreValues(h,m,n,s),r==null||r(m,h))}}else this.restoreValues(l,a,n,s),r==null||r(a,l),a.children&&l.children&&this.restoreObjectsValues(l.children,a.children,n,s,r)}}restoreSceneValues(e,t,n,s){e.fogType==="linear"?t.fog=It:e.fogType==="exp2"?t.fog=Rt:t.fog=null,this.restoreValues(e,t,n,s)}restoreConfigValues(e,t,n,s){this.restoreValues(e,t,n,s)}restoreValues(e,t,n,s){const r=Object.keys(e);for(const o of r){if(!Object.prototype.hasOwnProperty.call(e,o))continue;const a=e[o];if(a!==void 0)if(typeof a=="object"){const l=Object.keys(a)[0];if(l===void 0)continue;switch(l){case"$A":{const c=n(a[l]);if(!c)throw new Error(`Asset with uuid ${a[l]} not found`);t[o]=c.source;break}case"$O":{const c=s(a[l]);if(!c)throw new Error(`Object with uuid ${a[l]} not found`);t[o]=c;break}case"$V":{t[o].fromArray(a[l]);break}case"$C":{t[o].set(a[l]);break}case"$E":{t[o]=a[l];break}default:t[o]&&this.restoreValues(a,t[o],n,s)}}else t[o]=a}}}const ve=Symbol.for("d3-core.Entity");class I extends He{constructor(t){super();T(this,"object");T(this,"components");T(this,"core");T(this,"_onAdded",()=>{var n;if(!this.object.parent)return;const t=(n=I.extract(this.object.parent))==null?void 0:n.core;t&&this.object.traverse(s=>{var r;return(r=I.extract(s))==null?void 0:r.attach(t)})});T(this,"_onRemoved",()=>{this.object.traverse(t=>{var n;return(n=I.extract(t))==null?void 0:n.detach()})});this.object=t,this.components=[],this.object.addEventListener("added",this._onAdded),this.object.addEventListener("removed",this._onRemoved)}addComponent(t){return this.components.push(t),this.core&&t.attach(this.core),this.emit(ze.ComponentAdd,t),t}removeComponent(t){const n=this.components.indexOf(t);n!==-1&&(t._destroy(),this.components.splice(n,1),this.emit(ze.ComponentRemove,t))}getComponent(t){return this.components.find(n=>n instanceof t)}findComponent(t){return this.components.find(t)}destroy(){this.components.forEach(t=>t._destroy()),this.components.length=0,this.core=void 0,this.object.removeEventListener("added",this._onAdded),this.object.removeEventListener("removed",this._onRemoved),this.removeAllListeners()}attach(t){if(this.core){console.warn("Entity is already attached to a core.");return}this.core=t,this.components.forEach(n=>n.attach(t))}detach(){this.core&&(this.components.forEach(t=>t.detach()),this.core=void 0)}static from(t){let n=I.extract(t);return n||(n=new I(t),Object.defineProperty(t,ve,{value:n,enumerable:!1,configurable:!0})),n}static extract(t){return t[ve]}static destroy(t){t.traverse(n=>{const s=I.extract(n);s&&(s.destroy(),delete n[ve])})}}function rm(u,e){return I.from(u).addComponent(e)}function om(u,e){var t;(t=I.extract(u))==null||t.removeComponent(e)}function am(u,e){var t;return(t=I.extract(u))==null?void 0:t.getComponent(e)}function lm(u,e){var t;return(t=I.extract(u))==null?void 0:t.findComponent(e)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fi=i.BRDF_GGX,bi=i.BRDF_Lambert,xi=i.BasicPointShadowFilter,vi=i.BasicShadowFilter,wi=i.Break,yi=i.Const,Ti=i.Continue,Ci=i.DFGLUT,ki=i.D_GGX,Si=i.Discard,_i=i.EPSILON,Bi=i.F_Schlick,A=i.Fn,Ei=i.INFINITY,Mi=i.If,Le=i.Loop,Li=i.NodeAccess,Ii=i.NodeShaderStage,Ri=i.NodeType,Fi=i.NodeUpdateType,Ni=i.PCFShadowFilter,zi=i.PCFSoftShadowFilter,Di=i.PI,Pi=i.PI2,Vi=i.TWO_PI,Ai=i.HALF_PI,Oi=i.PointShadowFilter,Wi=i.Return,Ui=i.Schlick_to_F0,Hi=i.ShaderNode,ji=i.Stack,Gi=i.Switch,$i=i.TBNViewMatrix,Xi=i.VSMShadowFilter,qi=i.V_GGX_SmithCorrelated,Yi=i.Var,Zi=i.VarIntent,Qi=i.abs,Ji=i.acesFilmicToneMapping,Ki=i.acos,en=i.acosh,qe=i.add,tn=i.addMethodChaining,nn=i.addNodeElement,sn=i.agxToneMapping,rn=i.all,on=i.alphaT,an=i.and,ln=i.anisotropy,cn=i.anisotropyB,dn=i.anisotropyT,hn=i.any,pn=i.append,un=i.array,mn=i.arrayBuffer,gn=i.asin,fn=i.asinh,bn=i.assign,xn=i.atan,vn=i.atanh,wn=i.atomicAdd,yn=i.atomicAnd,Tn=i.atomicFunc,Cn=i.atomicLoad,kn=i.atomicMax,Sn=i.atomicMin,_n=i.atomicOr,Bn=i.atomicStore,En=i.atomicSub,Mn=i.atomicXor,Ln=i.attenuationColor,In=i.attenuationDistance,Rn=i.attribute,Fn=i.attributeArray,Nn=i.backgroundBlurriness,zn=i.backgroundIntensity,Dn=i.backgroundRotation,Pn=i.batch,Vn=i.bentNormalView,An=i.billboarding,On=i.bitAnd,Wn=i.bitNot,Un=i.bitOr,Hn=i.bitXor,jn=i.bitangentGeometry,Gn=i.bitangentLocal,$n=i.bitangentView,Xn=i.bitangentWorld,qn=i.bitcast,Yn=i.blendBurn,Zn=i.blendColor,Qn=i.blendDodge,Jn=i.blendOverlay,Kn=i.blendScreen,es=i.blur,ts=i.bool,is=i.buffer,ns=i.bufferAttribute,ss=i.bumpMap,rs=i.builtin,os=i.builtinAOContext,as=i.builtinShadowContext,ls=i.bvec2,cs=i.bvec3,ds=i.bvec4,hs=i.bypass,ps=i.cache,us=i.call,ms=i.cameraFar,gs=i.cameraIndex,fs=i.cameraNear,bs=i.cameraNormalMatrix,xs=i.cameraPosition,vs=i.cameraProjectionMatrix,ws=i.cameraProjectionMatrixInverse,ys=i.cameraViewMatrix,Ts=i.cameraViewport,Cs=i.cameraWorldMatrix,ks=i.cbrt,Ss=i.cdl,_s=i.ceil,Bs=i.checker,Es=i.cineonToneMapping,Ms=i.clamp,Ls=i.clearcoat,Is=i.clearcoatNormalView,Rs=i.clearcoatRoughness,Fs=i.clipSpace,Ns=i.code,Ce=i.color,zs=i.colorSpaceToWorking,Ds=i.colorToDirection,Ps=i.compute,Vs=i.computeKernel,As=i.computeSkinning,Os=i.context,Ws=i.convert,Us=i.convertColorSpace,Hs=i.convertToTexture,js=i.countLeadingZeros,Gs=i.countOneBits,$s=i.countTrailingZeros,Xs=i.cos,qs=i.cosh,Ys=i.cross,Zs=i.cubeTexture,Qs=i.cubeTextureBase,Js=i.dFdx,Ks=i.dFdy,er=i.dashSize,tr=i.debug,ir=i.decrement,nr=i.decrementBefore,sr=i.defaultBuildStages,rr=i.defaultShaderStages,or=i.defined,ar=i.degrees,lr=i.deltaTime,cr=i.densityFog,dr=i.densityFogFactor,hr=i.depth,pr=i.depthPass,ur=i.determinant,mr=i.difference,gr=i.diffuseColor,fr=i.directPointLight,br=i.directionToColor,xr=i.directionToFaceDirection,vr=i.dispersion,wr=i.distance,yr=i.div,Tr=i.dot,Cr=i.drawIndex,kr=i.dynamicBufferAttribute,Sr=i.element,_r=i.emissive,Br=i.equal,Er=i.equirectUV,Ye=i.exp,Mr=i.exp2,Lr=i.exponentialHeightFogFactor,Ir=i.expression,Rr=i.faceDirection,Fr=i.faceForward,Nr=i.faceforward,j=i.float,zr=i.floatBitsToInt,Dr=i.floatBitsToUint,Pr=i.floor,Vr=i.fog,Ar=i.fract,Or=i.frameGroup,Wr=i.frameId,Ur=i.frontFacing,Hr=i.fwidth,jr=i.gain,Gr=i.gapSize,$r=i.getConstNodeType,Xr=i.getCurrentStack,qr=i.getDirection,Yr=i.getDistanceAttenuation,Zr=i.getGeometryRoughness,Qr=i.getNormalFromDepth,Jr=i.interleavedGradientNoise,Kr=i.vogelDiskSample,eo=i.getParallaxCorrectNormal,to=i.getRoughness,io=i.getScreenPosition,no=i.getShIrradianceAt,so=i.getShadowMaterial,ro=i.getShadowRenderObjectFunction,oo=i.getTextureIndex,ao=i.getViewPosition,lo=i.globalId,co=i.glsl,ho=i.glslFn,po=i.grayscale,uo=i.greaterThan,mo=i.greaterThanEqual,go=i.hash,fo=i.highpModelNormalViewMatrix,bo=i.highpModelViewMatrix,xo=i.hue,vo=i.increment,wo=i.incrementBefore,yo=i.instance,To=i.instanceIndex,Co=i.instancedArray,ko=i.instancedBufferAttribute,So=i.instancedDynamicBufferAttribute,_o=i.instancedMesh,se=i.int,Bo=i.intBitsToFloat,Eo=i.inverse,Mo=i.inverseSqrt,Lo=i.inversesqrt,Io=i.invocationLocalIndex,Ro=i.invocationSubgroupIndex,Fo=i.ior,No=i.iridescence,zo=i.iridescenceIOR,Do=i.iridescenceThickness,Po=i.ivec2,Vo=i.ivec3,Ao=i.ivec4,Oo=i.js,Wo=i.label,Uo=i.length,Ho=i.lengthSq,jo=i.lessThan,Go=i.lessThanEqual,$o=i.lightPosition,Xo=i.lightProjectionUV,qo=i.lightShadowMatrix,Yo=i.lightTargetDirection,Zo=i.lightTargetPosition,Qo=i.lightViewPosition,Jo=i.lightingContext,Ko=i.lights,ea=i.linearDepth,ta=i.linearToneMapping,ia=i.localId,na=i.log,sa=i.log2,ra=i.logarithmicDepthToViewZ,Ze=i.luminance,oa=i.mat2,aa=i.mat3,la=i.mat4,ca=i.matcapUV,da=i.materialAO,ha=i.materialAlphaTest,pa=i.materialAnisotropy,ua=i.materialAnisotropyVector,ma=i.materialAttenuationColor,ga=i.materialAttenuationDistance,fa=i.materialClearcoat,ba=i.materialClearcoatNormal,xa=i.materialClearcoatRoughness,va=i.materialColor,wa=i.materialDispersion,ya=i.materialEmissive,Ta=i.materialEnvIntensity,Ca=i.materialEnvRotation,ka=i.materialIOR,Sa=i.materialIridescence,_a=i.materialIridescenceIOR,Ba=i.materialIridescenceThickness,Ea=i.materialLightMap,Ma=i.materialLineDashOffset,La=i.materialLineDashSize,Ia=i.materialLineGapSize,Ra=i.materialLineScale,Fa=i.materialLineWidth,Na=i.materialMetalness,za=i.materialNormal,Da=i.materialOpacity,Pa=i.materialPointSize,Va=i.materialReference,Aa=i.materialReflectivity,Oa=i.materialRefractionRatio,Wa=i.materialRotation,Ua=i.materialRoughness,Ha=i.materialSheen,ja=i.materialSheenRoughness,Ga=i.materialShininess,$a=i.materialSpecular,Xa=i.materialSpecularColor,qa=i.materialSpecularIntensity,Ya=i.materialSpecularStrength,Za=i.materialThickness,Qa=i.materialTransmission,Ja=i.max,Ka=i.maxMipLevel,el=i.mediumpModelViewMatrix,tl=i.metalness,he=i.min,ke=i.mix,il=i.mixElement,nl=i.mod,sl=i.modInt,rl=i.modelDirection,ol=i.modelNormalMatrix,al=i.modelPosition,ll=i.modelRadius,cl=i.modelScale,dl=i.modelViewMatrix,hl=i.modelViewPosition,pl=i.modelViewProjection,ul=i.modelWorldMatrix,ml=i.modelWorldMatrixInverse,gl=i.morphReference,fl=i.mrt,Se=i.mul,bl=i.mx_aastep,xl=i.mx_add,vl=i.mx_atan2,wl=i.mx_cell_noise_float,yl=i.mx_contrast,Tl=i.mx_divide,Cl=i.mx_fractal_noise_float,kl=i.mx_fractal_noise_vec2,Sl=i.mx_fractal_noise_vec3,_l=i.mx_fractal_noise_vec4,Bl=i.mx_frame,El=i.mx_heighttonormal,Ml=i.mx_hsvtorgb,Ll=i.mx_ifequal,Il=i.mx_ifgreater,Rl=i.mx_ifgreatereq,Fl=i.mx_invert,Nl=i.mx_modulo,zl=i.mx_multiply,Dl=i.mx_noise_float,Pl=i.mx_noise_vec3,Vl=i.mx_noise_vec4,Al=i.mx_place2d,Ol=i.mx_power,Wl=i.mx_ramp4,Ul=i.mx_ramplr,Hl=i.mx_ramptb,jl=i.mx_rgbtohsv,Gl=i.mx_rotate2d,$l=i.mx_rotate3d,Xl=i.mx_safepower,ql=i.mx_separate,Yl=i.mx_splitlr,Zl=i.mx_splittb,Ql=i.mx_srgb_texture_to_lin_rec709,Jl=i.mx_subtract,Kl=i.mx_timer,ec=i.mx_transform_uv,tc=i.mx_unifiednoise2d,ic=i.mx_unifiednoise3d,nc=i.mx_worley_noise_float,sc=i.mx_worley_noise_vec2,rc=i.mx_worley_noise_vec3,oc=i.negate,ac=i.neutralToneMapping,lc=i.nodeArray,cc=i.nodeImmutable,me=i.nodeObject,dc=i.nodeObjectIntent,hc=i.nodeObjects,pc=i.nodeProxy,uc=i.nodeProxyIntent,mc=i.normalFlat,gc=i.normalGeometry,fc=i.normalLocal,bc=i.normalMap,xc=i.normalView,vc=i.normalViewGeometry,wc=i.normalWorld,yc=i.normalWorldGeometry,Tc=i.normalize,Cc=i.not,kc=i.notEqual,Sc=i.numWorkgroups,_c=i.objectDirection,Bc=i.objectGroup,Ec=i.objectPosition,Mc=i.objectRadius,Lc=i.objectScale,Ic=i.objectViewPosition,Rc=i.objectWorldMatrix,Fc=i.OnBeforeObjectUpdate,Nc=i.OnBeforeMaterialUpdate,zc=i.OnObjectUpdate,Qe=i.OnMaterialUpdate,Dc=i.oneMinus,Pc=i.or,Je=i.orthographicDepthToViewZ,Vc=i.oscSawtooth,Ac=i.oscSine,Oc=i.oscSquare,Wc=i.oscTriangle,Uc=i.output,Hc=i.outputStruct,jc=i.overloadingFn,Gc=i.packHalf2x16,$c=i.packSnorm2x16,Xc=i.packUnorm2x16,qc=i.parabola,Yc=i.parallaxDirection,Zc=i.parallaxUV,Qc=i.parameter,Ke=i.pass,Ie=i.passTexture,Jc=i.pcurve,et=i.perspectiveDepthToViewZ,Kc=i.pmremTexture,ed=i.pointShadow,td=i.pointUV,id=i.pointWidth,nd=i.positionGeometry,sd=i.positionLocal,rd=i.positionPrevious,tt=i.positionView,od=i.positionViewDirection,ad=i.positionWorld,ld=i.positionWorldDirection,cd=i.posterize,dd=i.pow,hd=i.pow2,pd=i.pow3,ud=i.pow4,md=i.premultiplyAlpha,gd=i.property,fd=i.radians,bd=i.rand,xd=i.range,vd=i.rangeFog,wd=i.rangeFogFactor,yd=i.reciprocal,_e=i.reference,Td=i.referenceBuffer,Cd=i.reflect,kd=i.reflectVector,Sd=i.reflectView,_d=i.reflector,Bd=i.refract,Ed=i.refractVector,Md=i.refractView,Ld=i.reinhardToneMapping,Id=i.remap,Rd=i.remapClamp,Fd=i.renderGroup,it=i.renderOutput,Nd=i.rendererReference,zd=i.replaceDefaultUV,Dd=i.rotate,Pd=i.rotateUV,Vd=i.roughness,Ad=i.round,Od=i.rtt,Wd=i.sRGBTransferEOTF,Ud=i.sRGBTransferOETF,Hd=i.sample,jd=i.sampler,Gd=i.samplerComparison,$d=i.saturate,Xd=i.saturation,qd=i.screen,Yd=i.screenCoordinate,Zd=i.screenDPR,Qd=i.screenSize,Re=i.screenUV,Jd=i.select,Kd=i.setCurrentStack,eh=i.setName,th=i.shaderStages,ih=i.shadow,nh=i.shadowPositionWorld,sh=i.shapeCircle,rh=i.sharedUniformGroup,oh=i.sheen,ah=i.sheenRoughness,lh=i.shiftLeft,ch=i.shiftRight,dh=i.shininess,hh=i.sign,ph=i.sin,uh=i.sinh,mh=i.sinc,gh=i.skinning,nt=i.smoothstep,fh=i.smoothstepElement,bh=i.specularColor,xh=i.specularF90,vh=i.spherizeUV,wh=i.split,yh=i.spritesheetUV,Th=i.sqrt,Ch=i.stack,ie=i.step,kh=i.stepElement,Sh=i.storage,_h=i.storageBarrier,Bh=i.storageTexture,Eh=i.string,Mh=i.struct,Lh=i.sub,Ih=i.subgroupAdd,Rh=i.subgroupAll,Fh=i.subgroupAnd,Nh=i.subgroupAny,zh=i.subgroupBallot,Dh=i.subgroupBroadcast,Ph=i.subgroupBroadcastFirst,Vh=i.subBuild,Ah=i.subgroupElect,Oh=i.subgroupExclusiveAdd,Wh=i.subgroupExclusiveMul,Uh=i.subgroupInclusiveAdd,Hh=i.subgroupInclusiveMul,jh=i.subgroupIndex,Gh=i.subgroupMax,$h=i.subgroupMin,Xh=i.subgroupMul,qh=i.subgroupOr,Yh=i.subgroupShuffle,Zh=i.subgroupShuffleDown,Qh=i.subgroupShuffleUp,Jh=i.subgroupShuffleXor,Kh=i.subgroupSize,ep=i.subgroupXor,tp=i.tan,ip=i.tanh,np=i.tangentGeometry,sp=i.tangentLocal,rp=i.tangentView,op=i.tangentWorld,E=i.texture,ap=i.texture3D,lp=i.textureBarrier,cp=i.textureBicubic,dp=i.textureBicubicLevel,hp=i.textureCubeUV,pp=i.textureLoad,Be=i.textureSize,up=i.textureLevel,mp=i.textureStore,gp=i.thickness,fp=i.time,bp=i.toneMapping,xp=i.toneMappingExposure,vp=i.toonOutlinePass,wp=i.transformDirection,yp=i.transformNormal,Tp=i.transformNormalToView,Cp=i.transformedClearcoatNormalView,kp=i.transformedNormalView,Sp=i.transformedNormalWorld,_p=i.transmission,Bp=i.transpose,Ep=i.triNoise3D,Mp=i.triplanarTexture,Lp=i.triplanarTextures,Ip=i.trunc,Rp=i.uint,Fp=i.uintBitsToFloat,M=i.uniform,pe=i.uniformArray,Np=i.uniformCubeTexture,zp=i.uniformGroup,Dp=i.uniformFlow,Pp=i.uniformTexture,Vp=i.unpackHalf2x16,Ap=i.unpackSnorm2x16,Op=i.unpackUnorm2x16,Wp=i.unpremultiplyAlpha,Up=i.userData,ge=i.uv,Hp=i.uvec2,jp=i.uvec3,Gp=i.uvec4,$p=i.varying,Xp=i.varyingProperty,ne=i.vec2,K=i.vec3,N=i.vec4,qp=i.vectorComponents,Yp=i.velocity,Zp=i.vertexColor,Qp=i.vertexIndex,Jp=i.vertexStage,Kp=i.vibrance,eu=i.viewZToLogarithmicDepth,tu=i.viewZToOrthographicDepth,iu=i.viewZToPerspectiveDepth,nu=i.viewZToReversedOrthographicDepth,su=i.viewZToReversedPerspectiveDepth,ru=i.viewport,ou=i.viewportCoordinate,au=i.viewportDepthTexture,lu=i.viewportLinearDepth,cu=i.viewportMipTexture,du=i.viewportOpaqueMipTexture,hu=i.viewportResolution,pu=i.viewportSafeUV,uu=i.viewportSharedTexture,mu=i.viewportSize,gu=i.viewportTexture,fu=i.viewportUV,bu=i.wgsl,xu=i.wgslFn,vu=i.workgroupArray,wu=i.workgroupBarrier,yu=i.workgroupId,Tu=i.workingToColorSpace,Cu=i.xor,cm=Object.freeze(Object.defineProperty({__proto__:null,BRDF_GGX:fi,BRDF_Lambert:bi,BasicPointShadowFilter:xi,BasicShadowFilter:vi,Break:wi,Const:yi,Continue:Ti,DFGLUT:Ci,D_GGX:ki,Discard:Si,EPSILON:_i,F_Schlick:Bi,Fn:A,HALF_PI:Ai,INFINITY:Ei,If:Mi,Loop:Le,NodeAccess:Li,NodeShaderStage:Ii,NodeType:Ri,NodeUpdateType:Fi,OnBeforeMaterialUpdate:Nc,OnBeforeObjectUpdate:Fc,OnMaterialUpdate:Qe,OnObjectUpdate:zc,PCFShadowFilter:Ni,PCFSoftShadowFilter:zi,PI:Di,PI2:Pi,PointShadowFilter:Oi,Return:Wi,Schlick_to_F0:Ui,ShaderNode:Hi,Stack:ji,Switch:Gi,TBNViewMatrix:$i,TWO_PI:Vi,VSMShadowFilter:Xi,V_GGX_SmithCorrelated:qi,Var:Yi,VarIntent:Zi,abs:Qi,acesFilmicToneMapping:Ji,acos:Ki,acosh:en,add:qe,addMethodChaining:tn,addNodeElement:nn,agxToneMapping:sn,all:rn,alphaT:on,and:an,anisotropy:ln,anisotropyB:cn,anisotropyT:dn,any:hn,append:pn,array:un,arrayBuffer:mn,asin:gn,asinh:fn,assign:bn,atan:xn,atanh:vn,atomicAdd:wn,atomicAnd:yn,atomicFunc:Tn,atomicLoad:Cn,atomicMax:kn,atomicMin:Sn,atomicOr:_n,atomicStore:Bn,atomicSub:En,atomicXor:Mn,attenuationColor:Ln,attenuationDistance:In,attribute:Rn,attributeArray:Fn,backgroundBlurriness:Nn,backgroundIntensity:zn,backgroundRotation:Dn,batch:Pn,bentNormalView:Vn,billboarding:An,bitAnd:On,bitNot:Wn,bitOr:Un,bitXor:Hn,bitangentGeometry:jn,bitangentLocal:Gn,bitangentView:$n,bitangentWorld:Xn,bitcast:qn,blendBurn:Yn,blendColor:Zn,blendDodge:Qn,blendOverlay:Jn,blendScreen:Kn,blur:es,bool:ts,buffer:is,bufferAttribute:ns,builtin:rs,builtinAOContext:os,builtinShadowContext:as,bumpMap:ss,bvec2:ls,bvec3:cs,bvec4:ds,bypass:hs,cache:ps,call:us,cameraFar:ms,cameraIndex:gs,cameraNear:fs,cameraNormalMatrix:bs,cameraPosition:xs,cameraProjectionMatrix:vs,cameraProjectionMatrixInverse:ws,cameraViewMatrix:ys,cameraViewport:Ts,cameraWorldMatrix:Cs,cbrt:ks,cdl:Ss,ceil:_s,checker:Bs,cineonToneMapping:Es,clamp:Ms,clearcoat:Ls,clearcoatNormalView:Is,clearcoatRoughness:Rs,clipSpace:Fs,code:Ns,color:Ce,colorSpaceToWorking:zs,colorToDirection:Ds,compute:Ps,computeKernel:Vs,computeSkinning:As,context:Os,convert:Ws,convertColorSpace:Us,convertToTexture:Hs,cos:Xs,cosh:qs,countLeadingZeros:js,countOneBits:Gs,countTrailingZeros:$s,cross:Ys,cubeTexture:Zs,cubeTextureBase:Qs,dFdx:Js,dFdy:Ks,dashSize:er,debug:tr,decrement:ir,decrementBefore:nr,defaultBuildStages:sr,defaultShaderStages:rr,defined:or,degrees:ar,deltaTime:lr,densityFog:cr,densityFogFactor:dr,depth:hr,depthPass:pr,determinant:ur,difference:mr,diffuseColor:gr,directPointLight:fr,directionToColor:br,directionToFaceDirection:xr,dispersion:vr,distance:wr,div:yr,dot:Tr,drawIndex:Cr,dynamicBufferAttribute:kr,element:Sr,emissive:_r,equal:Br,equirectUV:Er,exp:Ye,exp2:Mr,exponentialHeightFogFactor:Lr,expression:Ir,faceDirection:Rr,faceForward:Fr,faceforward:Nr,float:j,floatBitsToInt:zr,floatBitsToUint:Dr,floor:Pr,fog:Vr,fract:Ar,frameGroup:Or,frameId:Wr,frontFacing:Ur,fwidth:Hr,gain:jr,gapSize:Gr,getConstNodeType:$r,getCurrentStack:Xr,getDirection:qr,getDistanceAttenuation:Yr,getGeometryRoughness:Zr,getNormalFromDepth:Qr,getParallaxCorrectNormal:eo,getRoughness:to,getScreenPosition:io,getShIrradianceAt:no,getShadowMaterial:so,getShadowRenderObjectFunction:ro,getTextureIndex:oo,getViewPosition:ao,globalId:lo,glsl:co,glslFn:ho,grayscale:po,greaterThan:uo,greaterThanEqual:mo,hash:go,highpModelNormalViewMatrix:fo,highpModelViewMatrix:bo,hue:xo,increment:vo,incrementBefore:wo,instance:yo,instanceIndex:To,instancedArray:Co,instancedBufferAttribute:ko,instancedDynamicBufferAttribute:So,instancedMesh:_o,int:se,intBitsToFloat:Bo,interleavedGradientNoise:Jr,inverse:Eo,inverseSqrt:Mo,inversesqrt:Lo,invocationLocalIndex:Io,invocationSubgroupIndex:Ro,ior:Fo,iridescence:No,iridescenceIOR:zo,iridescenceThickness:Do,ivec2:Po,ivec3:Vo,ivec4:Ao,js:Oo,label:Wo,length:Uo,lengthSq:Ho,lessThan:jo,lessThanEqual:Go,lightPosition:$o,lightProjectionUV:Xo,lightShadowMatrix:qo,lightTargetDirection:Yo,lightTargetPosition:Zo,lightViewPosition:Qo,lightingContext:Jo,lights:Ko,linearDepth:ea,linearToneMapping:ta,localId:ia,log:na,log2:sa,logarithmicDepthToViewZ:ra,luminance:Ze,mat2:oa,mat3:aa,mat4:la,matcapUV:ca,materialAO:da,materialAlphaTest:ha,materialAnisotropy:pa,materialAnisotropyVector:ua,materialAttenuationColor:ma,materialAttenuationDistance:ga,materialClearcoat:fa,materialClearcoatNormal:ba,materialClearcoatRoughness:xa,materialColor:va,materialDispersion:wa,materialEmissive:ya,materialEnvIntensity:Ta,materialEnvRotation:Ca,materialIOR:ka,materialIridescence:Sa,materialIridescenceIOR:_a,materialIridescenceThickness:Ba,materialLightMap:Ea,materialLineDashOffset:Ma,materialLineDashSize:La,materialLineGapSize:Ia,materialLineScale:Ra,materialLineWidth:Fa,materialMetalness:Na,materialNormal:za,materialOpacity:Da,materialPointSize:Pa,materialReference:Va,materialReflectivity:Aa,materialRefractionRatio:Oa,materialRotation:Wa,materialRoughness:Ua,materialSheen:Ha,materialSheenRoughness:ja,materialShininess:Ga,materialSpecular:$a,materialSpecularColor:Xa,materialSpecularIntensity:qa,materialSpecularStrength:Ya,materialThickness:Za,materialTransmission:Qa,max:Ja,maxMipLevel:Ka,mediumpModelViewMatrix:el,metalness:tl,min:he,mix:ke,mixElement:il,mod:nl,modInt:sl,modelDirection:rl,modelNormalMatrix:ol,modelPosition:al,modelRadius:ll,modelScale:cl,modelViewMatrix:dl,modelViewPosition:hl,modelViewProjection:pl,modelWorldMatrix:ul,modelWorldMatrixInverse:ml,morphReference:gl,mrt:fl,mul:Se,mx_aastep:bl,mx_add:xl,mx_atan2:vl,mx_cell_noise_float:wl,mx_contrast:yl,mx_divide:Tl,mx_fractal_noise_float:Cl,mx_fractal_noise_vec2:kl,mx_fractal_noise_vec3:Sl,mx_fractal_noise_vec4:_l,mx_frame:Bl,mx_heighttonormal:El,mx_hsvtorgb:Ml,mx_ifequal:Ll,mx_ifgreater:Il,mx_ifgreatereq:Rl,mx_invert:Fl,mx_modulo:Nl,mx_multiply:zl,mx_noise_float:Dl,mx_noise_vec3:Pl,mx_noise_vec4:Vl,mx_place2d:Al,mx_power:Ol,mx_ramp4:Wl,mx_ramplr:Ul,mx_ramptb:Hl,mx_rgbtohsv:jl,mx_rotate2d:Gl,mx_rotate3d:$l,mx_safepower:Xl,mx_separate:ql,mx_splitlr:Yl,mx_splittb:Zl,mx_srgb_texture_to_lin_rec709:Ql,mx_subtract:Jl,mx_timer:Kl,mx_transform_uv:ec,mx_unifiednoise2d:tc,mx_unifiednoise3d:ic,mx_worley_noise_float:nc,mx_worley_noise_vec2:sc,mx_worley_noise_vec3:rc,negate:oc,neutralToneMapping:ac,nodeArray:lc,nodeImmutable:cc,nodeObject:me,nodeObjectIntent:dc,nodeObjects:hc,nodeProxy:pc,nodeProxyIntent:uc,normalFlat:mc,normalGeometry:gc,normalLocal:fc,normalMap:bc,normalView:xc,normalViewGeometry:vc,normalWorld:wc,normalWorldGeometry:yc,normalize:Tc,not:Cc,notEqual:kc,numWorkgroups:Sc,objectDirection:_c,objectGroup:Bc,objectPosition:Ec,objectRadius:Mc,objectScale:Lc,objectViewPosition:Ic,objectWorldMatrix:Rc,oneMinus:Dc,or:Pc,orthographicDepthToViewZ:Je,oscSawtooth:Vc,oscSine:Ac,oscSquare:Oc,oscTriangle:Wc,output:Uc,outputStruct:Hc,overloadingFn:jc,packHalf2x16:Gc,packSnorm2x16:$c,packUnorm2x16:Xc,parabola:qc,parallaxDirection:Yc,parallaxUV:Zc,parameter:Qc,pass:Ke,passTexture:Ie,pcurve:Jc,perspectiveDepthToViewZ:et,pmremTexture:Kc,pointShadow:ed,pointUV:td,pointWidth:id,positionGeometry:nd,positionLocal:sd,positionPrevious:rd,positionView:tt,positionViewDirection:od,positionWorld:ad,positionWorldDirection:ld,posterize:cd,pow:dd,pow2:hd,pow3:pd,pow4:ud,premultiplyAlpha:md,property:gd,radians:fd,rand:bd,range:xd,rangeFog:vd,rangeFogFactor:wd,reciprocal:yd,reference:_e,referenceBuffer:Td,reflect:Cd,reflectVector:kd,reflectView:Sd,reflector:_d,refract:Bd,refractVector:Ed,refractView:Md,reinhardToneMapping:Ld,remap:Id,remapClamp:Rd,renderGroup:Fd,renderOutput:it,rendererReference:Nd,replaceDefaultUV:zd,rotate:Dd,rotateUV:Pd,roughness:Vd,round:Ad,rtt:Od,sRGBTransferEOTF:Wd,sRGBTransferOETF:Ud,sample:Hd,sampler:jd,samplerComparison:Gd,saturate:$d,saturation:Xd,screen:qd,screenCoordinate:Yd,screenDPR:Zd,screenSize:Qd,screenUV:Re,select:Jd,setCurrentStack:Kd,setName:eh,shaderStages:th,shadow:ih,shadowPositionWorld:nh,shapeCircle:sh,sharedUniformGroup:rh,sheen:oh,sheenRoughness:ah,shiftLeft:lh,shiftRight:ch,shininess:dh,sign:hh,sin:ph,sinc:mh,sinh:uh,skinning:gh,smoothstep:nt,smoothstepElement:fh,specularColor:bh,specularF90:xh,spherizeUV:vh,split:wh,spritesheetUV:yh,sqrt:Th,stack:Ch,step:ie,stepElement:kh,storage:Sh,storageBarrier:_h,storageTexture:Bh,string:Eh,struct:Mh,sub:Lh,subBuild:Vh,subgroupAdd:Ih,subgroupAll:Rh,subgroupAnd:Fh,subgroupAny:Nh,subgroupBallot:zh,subgroupBroadcast:Dh,subgroupBroadcastFirst:Ph,subgroupElect:Ah,subgroupExclusiveAdd:Oh,subgroupExclusiveMul:Wh,subgroupInclusiveAdd:Uh,subgroupInclusiveMul:Hh,subgroupIndex:jh,subgroupMax:Gh,subgroupMin:$h,subgroupMul:Xh,subgroupOr:qh,subgroupShuffle:Yh,subgroupShuffleDown:Zh,subgroupShuffleUp:Qh,subgroupShuffleXor:Jh,subgroupSize:Kh,subgroupXor:ep,tan:tp,tangentGeometry:np,tangentLocal:sp,tangentView:rp,tangentWorld:op,tanh:ip,texture:E,texture3D:ap,textureBarrier:lp,textureBicubic:cp,textureBicubicLevel:dp,textureCubeUV:hp,textureLevel:up,textureLoad:pp,textureSize:Be,textureStore:mp,thickness:gp,time:fp,toneMapping:bp,toneMappingExposure:xp,toonOutlinePass:vp,transformDirection:wp,transformNormal:yp,transformNormalToView:Tp,transformedClearcoatNormalView:Cp,transformedNormalView:kp,transformedNormalWorld:Sp,transmission:_p,transpose:Bp,triNoise3D:Ep,triplanarTexture:Mp,triplanarTextures:Lp,trunc:Ip,uint:Rp,uintBitsToFloat:Fp,uniform:M,uniformArray:pe,uniformCubeTexture:Np,uniformFlow:Dp,uniformGroup:zp,uniformTexture:Pp,unpackHalf2x16:Vp,unpackSnorm2x16:Ap,unpackUnorm2x16:Op,unpremultiplyAlpha:Wp,userData:Up,uv:ge,uvec2:Hp,uvec3:jp,uvec4:Gp,varying:$p,varyingProperty:Xp,vec2:ne,vec3:K,vec4:N,vectorComponents:qp,velocity:Yp,vertexColor:Zp,vertexIndex:Qp,vertexStage:Jp,vibrance:Kp,viewZToLogarithmicDepth:eu,viewZToOrthographicDepth:tu,viewZToPerspectiveDepth:iu,viewZToReversedOrthographicDepth:nu,viewZToReversedPerspectiveDepth:su,viewport:ru,viewportCoordinate:ou,viewportDepthTexture:au,viewportLinearDepth:lu,viewportMipTexture:cu,viewportOpaqueMipTexture:du,viewportResolution:hu,viewportSafeUV:pu,viewportSharedTexture:uu,viewportSize:mu,viewportTexture:gu,viewportUV:fu,vogelDiskSample:Kr,wgsl:bu,wgslFn:xu,workgroupArray:vu,workgroupBarrier:wu,workgroupId:yu,workingToColorSpace:Tu,xor:Cu},Symbol.toStringTag,{value:"Module"})),z=new Me,ku=new O,Su=new O(1,0),_u=new O(0,1);let we;class Bu extends Ge{static get type(){return"BloomNode"}constructor(e,t=1,n=0,s=0){super("vec4"),this.inputNode=e,this.strength=M(t),this.radius=M(n),this.threshold=M(s),this.smoothWidth=M(.01),this._renderTargetsHorizontal=[],this._renderTargetsVertical=[],this._nMips=5,this._renderTargetBright=new D(1,1,{depthBuffer:!1,type:de}),this._renderTargetBright.texture.name="UnrealBloomPass.bright",this._renderTargetBright.texture.generateMipmaps=!1;for(let r=0;r<this._nMips;r++){const o=new D(1,1,{depthBuffer:!1,type:de});o.texture.name="UnrealBloomPass.h"+r,o.texture.generateMipmaps=!1,this._renderTargetsHorizontal.push(o);const a=new D(1,1,{depthBuffer:!1,type:de});a.texture.name="UnrealBloomPass.v"+r,a.texture.generateMipmaps=!1,this._renderTargetsVertical.push(a)}this._compositeMaterial=null,this._highPassFilterMaterial=null,this._separableBlurMaterials=[],this._textureNodeBright=E(this._renderTargetBright.texture),this._textureNodeBlur0=E(this._renderTargetsVertical[0].texture),this._textureNodeBlur1=E(this._renderTargetsVertical[1].texture),this._textureNodeBlur2=E(this._renderTargetsVertical[2].texture),this._textureNodeBlur3=E(this._renderTargetsVertical[3].texture),this._textureNodeBlur4=E(this._renderTargetsVertical[4].texture),this._textureOutput=Ie(this,this._renderTargetsHorizontal[0].texture),this.updateBeforeType=$e.FRAME}getTextureNode(){return this._textureOutput}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this._renderTargetBright.setSize(n,s);for(let r=0;r<this._nMips;r++)this._renderTargetsHorizontal[r].setSize(n,s),this._renderTargetsVertical[r].setSize(n,s),this._separableBlurMaterials[r].invSize.value.set(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}updateBefore(e){const{renderer:t}=e;we=G.resetRendererState(t,we);const n=t.getDrawingBufferSize(ku);this.setSize(n.width,n.height),t.setRenderTarget(this._renderTargetBright),z.material=this._highPassFilterMaterial,z.name="Bloom [ High Pass ]",z.render(t);let s=this._renderTargetBright;for(let r=0;r<this._nMips;r++)z.material=this._separableBlurMaterials[r],this._separableBlurMaterials[r].colorTexture.value=s.texture,this._separableBlurMaterials[r].direction.value=Su,t.setRenderTarget(this._renderTargetsHorizontal[r]),z.name=`Bloom [ Blur Horizontal - ${r} ]`,z.render(t),this._separableBlurMaterials[r].colorTexture.value=this._renderTargetsHorizontal[r].texture,this._separableBlurMaterials[r].direction.value=_u,t.setRenderTarget(this._renderTargetsVertical[r]),z.name=`Bloom [ Blur Vertical - ${r} ]`,z.render(t),s=this._renderTargetsVertical[r];t.setRenderTarget(this._renderTargetsHorizontal[0]),z.material=this._compositeMaterial,z.name="Bloom [ Composite ]",z.render(t),G.restoreRendererState(t,we)}setup(e){const t=A(()=>{const l=this.inputNode,c=Ze(l.rgb),d=nt(this.threshold,this.threshold.add(this.smoothWidth),c);return ke(N(0),l,d)});this._highPassFilterMaterial=this._highPassFilterMaterial||new P,this._highPassFilterMaterial.fragmentNode=t().context(e.getSharedContext()),this._highPassFilterMaterial.name="Bloom_highPass",this._highPassFilterMaterial.needsUpdate=!0;const n=[6,10,14,18,22];for(let l=0;l<this._nMips;l++)this._separableBlurMaterials.push(this._getSeparableBlurMaterial(e,n[l]));const s=pe([1,.8,.6,.4,.2]),r=pe([new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1)]),o=A(([l,c])=>{const d=j(1.2).sub(l);return ke(l,d,c)}).setLayout({name:"lerpBloomFactor",type:"float",inputs:[{name:"factor",type:"float"},{name:"radius",type:"float"}]}),a=A(()=>{const l=o(s.element(0),this.radius).mul(N(r.element(0),1)).mul(this._textureNodeBlur0),c=o(s.element(1),this.radius).mul(N(r.element(1),1)).mul(this._textureNodeBlur1),d=o(s.element(2),this.radius).mul(N(r.element(2),1)).mul(this._textureNodeBlur2),p=o(s.element(3),this.radius).mul(N(r.element(3),1)).mul(this._textureNodeBlur3),h=o(s.element(4),this.radius).mul(N(r.element(4),1)).mul(this._textureNodeBlur4);return l.add(c).add(d).add(p).add(h).mul(this.strength)});return this._compositeMaterial=this._compositeMaterial||new P,this._compositeMaterial.fragmentNode=a().context(e.getSharedContext()),this._compositeMaterial.name="Bloom_comp",this._compositeMaterial.needsUpdate=!0,this._textureOutput}dispose(){for(let e=0;e<this._renderTargetsHorizontal.length;e++)this._renderTargetsHorizontal[e].dispose();for(let e=0;e<this._renderTargetsVertical.length;e++)this._renderTargetsVertical[e].dispose();this._renderTargetBright.dispose(),this._highPassFilterMaterial!==null&&this._highPassFilterMaterial.dispose(),this._compositeMaterial!==null&&this._compositeMaterial.dispose();for(let e=0;e<this._separableBlurMaterials.length;e++)this._separableBlurMaterials[e].dispose()}_getSeparableBlurMaterial(e,t){const n=[],s=t/3;for(let m=0;m<t;m++)n.push(.39894*Math.exp(-.5*m*m/(s*s))/s);const r=E(null),o=pe(n),a=M(new O),l=M(new O(.5,.5)),c=ge(),d=m=>r.sample(m),p=A(()=>{const m=d(c).rgb.mul(o.element(0)).toVar();return Le({start:se(1),end:se(t),type:"int",condition:"<"},({i:g})=>{const f=j(g),C=o.element(g),w=l.mul(a).mul(f),y=d(c.add(w)).rgb,_=d(c.sub(w)).rgb;m.addAssign(qe(y,_).mul(C))}),N(m,1)}),h=new P;return h.fragmentNode=p().context(e.getSharedContext()),h.name="Bloom_separable",h.needsUpdate=!0,h.colorTexture=r,h.direction=l,h.invSize=a,h}}const Eu=(u,e,t,n)=>new Bu(me(u),e,t,n);class st{constructor(e,t){this.uid=e,this.cid=e.match(/^(.*):f(\d+)$/)[1],this.name=t,this.timestamp=0,this.cpu=0,this.gpu=0,this.fps=0,this.children=[],this.parent=null}}class Mu extends st{constructor(e,t,n,s){let r=t.name;r===""&&(t.isScene?r="Scene":t.isQuadMesh&&(r="QuadMesh")),super(e,r),this.scene=t,this.camera=n,this.renderTarget=s,this.isRenderStats=!0}}class Lu extends st{constructor(e,t){super(e,t.name),this.computeNode=t,this.isComputeStats=!0}}class Iu extends hi{constructor(){super(),this.currentFrame=null,this.currentRender=null,this.currentNodes=null,this.lastFrame=null,this.frames=[],this.framesLib={},this.maxFrames=512,this._lastFinishTime=0,this._resolveTimestampPromise=null,this.isRendererInspector=!0}getParent(){return this.currentRender||this.getFrame()}begin(){this.currentFrame=this._createFrame(),this.currentRender=this.currentFrame,this.currentNodes=[]}finish(){const e=performance.now(),t=this.currentFrame;t.finishTime=e,t.deltaTime=e-(this._lastFinishTime>0?this._lastFinishTime:e),this.addFrame(t),this.fps=this._getFPS(),this.lastFrame=t,this.currentFrame=null,this.currentRender=null,this.currentNodes=null,this._lastFinishTime=e}_getFPS(){let e=0,t=0;for(let n=this.frames.length-1;n>=0;n--){const s=this.frames[n];if(e++,t+=s.deltaTime,t>=1e3)break}return e*1e3/t}_createFrame(){return{frameId:this.nodeFrame.frameId,resolvedCompute:!1,resolvedRender:!1,deltaTime:0,startTime:performance.now(),finishTime:0,miscellaneous:0,children:[],renders:[],computes:[]}}getFrame(){return this.currentFrame||this.lastFrame}getFrameById(e){return this.framesLib[e]||null}updateTabs(){}resolveFrame(){}async resolveTimestamp(){return this._resolveTimestampPromise!==null?this._resolveTimestampPromise:(this._resolveTimestampPromise=new Promise(e=>{requestAnimationFrame(async()=>{const t=this.getRenderer();await t.resolveTimestampsAsync(le.COMPUTE),await t.resolveTimestampsAsync(le.RENDER);const n=t.backend.getTimestampFrames(le.COMPUTE),s=t.backend.getTimestampFrames(le.RENDER),r=[...new Set([...n,...s])];for(const o of r){const a=this.getFrameById(o);if(a!==null){if(a.resolvedCompute===!1)if(a.computes.length>0){if(n.includes(o)){for(const l of a.computes)t.backend.hasTimestamp(l.uid)?l.gpu=t.backend.getTimestamp(l.uid):(l.gpu=0,l.gpuNotAvailable=!0);a.resolvedCompute=!0}}else a.resolvedCompute=!0;if(a.resolvedRender===!1)if(a.renders.length>0){if(s.includes(o)){for(const l of a.renders)t.backend.hasTimestamp(l.uid)?l.gpu=t.backend.getTimestamp(l.uid):(l.gpu=0,l.gpuNotAvailable=!0);a.resolvedRender=!0}}else a.resolvedRender=!0;a.resolvedCompute===!0&&a.resolvedRender===!0&&this.resolveFrame(a)}}this._resolveTimestampPromise=null,e()})}),this._resolveTimestampPromise)}get isAvailable(){return this.getRenderer()!==null}addFrame(e){if(this.frames.length>=this.maxFrames){const t=this.frames.shift();delete this.framesLib[t.frameId]}this.frames.push(e),this.framesLib[e.frameId]=e,this.isAvailable&&(this.updateTabs(),this.resolveTimestamp())}inspect(e){const t=this.currentNodes;t!==null?t.push(e):Ft('RendererInspector: Unable to inspect node outside of frame scope. Use "renderer.setAnimationLoop()".')}beginCompute(e,t){const n=this.getFrame();if(!n)return;const s=new Lu(e,t);s.timestamp=performance.now(),s.parent=this.currentCompute||this.getParent(),n.computes.push(s),this.currentRender!==null?this.currentRender.children.push(s):n.children.push(s),this.currentCompute=s}finishCompute(){if(!this.getFrame())return;const t=this.currentCompute;t.cpu=performance.now()-t.timestamp,this.currentCompute=t.parent.isComputeStats?t.parent:null}beginRender(e,t,n,s){const r=this.getFrame();if(!r)return;const o=new Mu(e,t,n,s);o.timestamp=performance.now(),o.parent=this.getParent(),r.renders.push(o),this.currentRender!==null?this.currentRender.children.push(o):r.children.push(o),this.currentRender=o}finishRender(){if(!this.getFrame())return;const t=this.currentRender;t.cpu=performance.now()-t.timestamp,this.currentRender=t.parent}}class Ru{static init(){if(document.getElementById("profiler-styles"))return;const e=`
:root {
	--profiler-bg: #1e1e24f5;
	--profiler-header-bg: #2a2a33aa;
	--profiler-header: #2a2a33;
	--profiler-border: #4a4a5a;
	--text-primary: #e0e0e0;
	--text-secondary: #9a9aab;
	--accent-color: #00aaff;
	--color-green: #4caf50;
	--color-yellow: #ffc107;
	--color-red: #f44336;
	--color-fps: rgb(63, 81, 181);
	--color-call: rgba(255, 185, 34, 1);
	--font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	--font-mono: 'Fira Code', 'Courier New', Courier, monospace;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Fira+Code&display=swap');

#profiler-panel *, #profiler-toggle * {
	text-transform: initial;
	line-height: normal;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#profiler-toggle {
	position: fixed;
	top: 15px;
	right: 15px;
	background-color: rgba(30, 30, 36, 0.85);
	border: 1px solid #4a4a5a54;
	border-radius: 12px 6px 6px 12px;
	color: var(--text-primary);
	cursor: pointer;
	z-index: 1001;
	transition: all 0.2s ease-in-out;
	/*font-size: 14px;*/
	font-size: 15px;
	backdrop-filter: blur(8px);
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: stretch;
	padding: 0;
	overflow: hidden;
	font-family: var(--font-family);
}

#profiler-toggle.position-right.panel-open {
	right: auto;
	left: 15px;
	border-radius: 6px 12px 12px 6px;
	flex-direction: row-reverse;
}

#profiler-toggle.position-right.panel-open #builtin-tabs-container {
	border-right: none;
	border-left: 1px solid #262636;
}

#profiler-toggle:hover {
	border-color: var(--accent-color);
}

#profiler-toggle.panel-open #toggle-icon {
	background-color: rgba(0, 170, 255, 0.2);
	color: var(--accent-color);
}

#toggle-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	font-size: 20px;
	transition: background-color 0.2s;
}

#profiler-toggle:hover #toggle-icon {
	background-color: rgba(255, 255, 255, 0.05);
}

#profiler-toggle.panel-open:hover #toggle-icon {
	background-color: rgba(0, 170, 255, 0.3);
}

.toggle-separator {
	width: 1px;
	background-color: var(--profiler-border);
}

#toggle-text {
	display: flex;
	align-items: baseline;
	padding: 8px 14px;
	min-width: 80px;
	justify-content: right;
}

#toggle-text .fps-label {
	font-size: 0.7em;
	margin-left: 10px;
    color: #999;
}

#builtin-tabs-container {
	display: flex;
	align-items: stretch;
	gap: 0;
	border-right: 1px solid #262636;
	order: -1;
}

.builtin-tab-btn {
	background: transparent;
	border: none;
	color: var(--text-secondary);
	cursor: pointer;
	padding: 8px 14px;
	font-family: var(--font-family);
	font-size: 13px;
	font-weight: 600;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 32px;
	position: relative;
}

.builtin-tab-btn svg {
	width: 20px;
	height: 20px;
	stroke: currentColor;
}

.builtin-tab-btn:hover {
	background-color: rgba(255, 255, 255, 0.08);
	color: var(--accent-color);
}

.builtin-tab-btn:active {
	background-color: rgba(255, 255, 255, 0.12);
}

.builtin-tab-btn.active {
	background-color: rgba(0, 170, 255, 0.2);
	color: var(--accent-color);
}

.builtin-tab-btn.active:hover {
	background-color: rgba(0, 170, 255, 0.3);
}

#profiler-mini-panel {
	position: fixed;
	top: 60px;
	right: 15px;
	background-color: rgba(30, 30, 36, 0.85);
	border: 1px solid #4a4a5a54;
	border-radius: 8px;
	color: var(--text-primary);
	z-index: 9999;
	backdrop-filter: blur(8px);
	box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
	font-family: var(--font-family);
	font-size: 11px;
	width: 350px;
	max-height: calc(100vh - 100px);
	overflow-y: auto;
	overflow-x: hidden;
	display: none;
	opacity: 0;
	transform: translateY(-10px) scale(0.98);
	transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
	            transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

#profiler-mini-panel.position-right.panel-open {
	right: auto;
	left: 15px;
}

#profiler-mini-panel.visible {
	display: block;
	opacity: 1;
	transform: translateY(0) scale(1);
}

#profiler-mini-panel::-webkit-scrollbar {
	width: 6px;
}

#profiler-mini-panel::-webkit-scrollbar-track {
	background: transparent;
}

#profiler-mini-panel::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.15);
	border-radius: 3px;
	transition: background 0.2s;
}

#profiler-mini-panel::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.25);
}

.mini-panel-content {
	padding: 0;
	font-size: 11px;
	line-height: 1.5;
	font-family: var(--font-mono);
	letter-spacing: 0.3px;
	user-select: none;
	-webkit-user-select: none;
}

.mini-panel-content .profiler-content {
	display: block !important;
	background: transparent;
}

.mini-panel-content .list-scroll-wrapper {
	max-height: calc(100vh - 120px);
	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;
}

.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar {
	width: 4px;
}

.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar-track {
	background: transparent;
}

.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.1);
	border-radius: 2px;
}

.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.2);
}

.mini-panel-content .parameters {
	background: transparent;
	border: none;
	box-shadow: none;
	padding: 4px;
}

.mini-panel-content .list-container.parameters {
	padding: 2px 6px 0px 6px !important;
}

.mini-panel-content .list-header {
	display: none;
	padding: 2px 4px;
	font-size: 11px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.mini-panel-content .list-item {
	border-bottom: 1px solid rgba(74, 74, 90, 0.2);
	transition: background-color 0.15s;
}

.mini-panel-content .list-item:last-child {
	border-bottom: none;
}

.mini-panel-content .list-item:hover {
	background-color: rgba(255, 255, 255, 0.04);
}

.mini-panel-content .list-item.actionable:hover {
	background-color: rgba(255, 255, 255, 0.06);
	cursor: pointer;
}

/* Style adjustments for lil-gui look */
.mini-panel-content .item-row {
	padding: 3px 8px;
	min-height: 24px;
}

.mini-panel-content .list-item-row {
	padding: 1px 4px;
	gap: 8px;
	min-height: 21px;
	align-items: center;
}

.mini-panel-content input[type="checkbox"] {
	width: 12px;
	height: 12px;
}

.mini-panel-content input[type="range"] {
	height: 18px;
}

.mini-panel-content .value-number input,
.mini-panel-content .value-slider input {
	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(74, 74, 90, 0.5);
	font-size: 10px;
}

.mini-panel-content .value-number input:focus,
.mini-panel-content .value-slider input:focus {
	border-color: var(--accent-color);
}

.mini-panel-content .value-slider {
	gap: 6px;
}

/* Compact nested items */
.mini-panel-content .list-item .list-item {
	margin-left: 8px;
}

.mini-panel-content .list-item .list-item .item-row,
.mini-panel-content .list-item .list-item .list-item-row {
	padding: 2px 6px;
	min-height: 22px;
}

/* Compact collapsible headers */
.mini-panel-content .collapsible .item-row,
.mini-panel-content .list-item-row.collapsible {
	padding: 2px 8px;
	font-weight: 600;
	min-height: 16px;
	display: flex;
	align-items: center;
}

.mini-panel-content .collapsible-icon {
	font-size: 10px;
	width: 14px;
	height: 14px;
}

.mini-panel-content .param-control input[type="range"] {
	height: 12px;
	margin-top: 1px;
	padding-top: 5px;
	user-select: none;
	-webkit-user-select: none;
	outline: none;
}

.mini-panel-content .param-control input[type="range"]::-webkit-slider-thumb {
	width: 14px;
	height: 14px;
	margin-top: -5px;
	user-select: none;
	-webkit-user-select: none;
}

.mini-panel-content .param-control input[type="range"]::-moz-range-thumb {
	width: 14px;
	height: 14px;
	user-select: none;
	-moz-user-select: none;
}

.mini-panel-content .list-children-container {
	padding-left: 0;
}

.mini-panel-content .param-control input[type="number"] {
	flex-basis: 60px !important;
}

.mini-panel-content .param-control {
	align-items: center;
}

.mini-panel-content .param-control select {
	font-size: 11px;
}

.mini-panel-content .list-item-wrapper {
	margin-top: 0;
	margin-bottom: 0;
}

#profiler-panel {
	position: fixed;
	z-index: 1001 !important;
	bottom: 0;
	left: 0;
	right: 0;
	height: 350px;
	background-color: var(--profiler-bg);
	backdrop-filter: blur(8px);
	border-top: 2px solid var(--profiler-border);
	color: var(--text-primary);
	display: flex;
	flex-direction: column;
	z-index: 1000;
	/*box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.5);*/
	transform: translateY(100%);
	transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s ease-out, width 0.3s ease-out;
	font-family: var(--font-mono);
}

#profiler-panel.resizing,
#profiler-panel.dragging {
	transition: none;
}

#profiler-panel.visible {
	transform: translateY(0);
}

#profiler-panel.maximized {
	height: 100vh;
}

/* Position-specific styles */
#profiler-panel.position-top {
	bottom: auto;
	top: 0;
	border-top: none;
	border-bottom: 2px solid var(--profiler-border);
	transform: translateY(-100%);
}

#profiler-panel.position-top.visible {
	transform: translateY(0);
}

#profiler-panel.position-bottom {
	/* Default position - already defined above */
}

#profiler-panel.position-left {
	top: 0;
	bottom: 0;
	left: 0;
	right: auto;
	width: 350px;
	height: 100%;
	border-top: none;
	border-right: 2px solid var(--profiler-border);
	transform: translateX(-100%);
}

#profiler-panel.position-left.visible {
	transform: translateX(0);
}

#profiler-panel.position-right {
	top: 0;
	bottom: 0;
	left: auto;
	right: 0;
	width: 350px;
	height: 100%;
	border-top: none;
	border-left: 2px solid var(--profiler-border);
	transform: translateX(100%);
}

#profiler-panel.position-right.visible {
	transform: translateX(0);
}

#profiler-panel.position-floating {
	border: 2px solid var(--profiler-border);
	border-radius: 8px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
	transform: none !important;
	overflow: hidden;
}

#profiler-panel.position-floating.visible {
	transform: none !important;
}

#profiler-panel.position-floating .profiler-header {
	border-radius: 6px 6px 0 0;
}

#profiler-panel.position-floating .panel-resizer {
	bottom: 0;
	right: 0;
	top: auto;
	left: auto;
	width: 16px;
	height: 16px;
	cursor: nwse-resize;
	border-radius: 0 0 6px 0;
}

#profiler-panel.position-floating .panel-resizer::after {
	content: '';
	position: absolute;
	right: 2px;
	bottom: 2px;
	width: 10px;
	height: 10px;
	background: linear-gradient(135deg, transparent 0%, transparent 45%, var(--profiler-border) 45%, var(--profiler-border) 55%, transparent 55%);
}


.panel-resizer {
	position: absolute;
	top: -2px;
	left: 0;
	width: 100%;
	height: 5px;
	cursor: ns-resize;
	z-index: 1001;
	touch-action: none;
}

#profiler-panel.position-top .panel-resizer {
	top: auto;
	bottom: -2px;
}

#profiler-panel.position-left .panel-resizer {
	top: 0;
	left: auto;
	right: -2px;
	width: 5px;
	height: 100%;
	cursor: ew-resize;
}

#profiler-panel.position-right .panel-resizer {
	top: 0;
	left: -2px;
	right: auto;
	width: 5px;
	height: 100%;
	cursor: ew-resize;
}

.profiler-header {
	display: flex;
	background-color: var(--profiler-header-bg);
	border-bottom: 1px solid var(--profiler-border);
	flex-shrink: 0;
	justify-content: space-between;
	align-items: stretch;

	overflow-x: auto;
	overflow-y: hidden;
	width: calc(100% - 134px);
	height: 38px;
	user-select: none;
	-webkit-user-select: none;
}

/* Adjust header width based on panel position */
#profiler-panel.position-right .profiler-header,
#profiler-panel.position-left .profiler-header {
	width: calc(100% - 134px);
}

#profiler-panel.position-bottom .profiler-header,
#profiler-panel.position-top .profiler-header {
	width: calc(100% - 134px);
}

/* Adjust header width when position toggle button is hidden (mobile) */
#profiler-panel.hide-position-toggle .profiler-header {
	width: calc(100% - 90px);
}

/* ===== RULES FOR WHEN THERE ARE NO TABS ===== */

/* Horizontal mode (bottom/top) without tabs */
#profiler-panel.position-bottom.no-tabs:not(.maximized),
#profiler-panel.position-top.no-tabs:not(.maximized) {
	height: 38px !important;
	min-height: 38px !important;
}

#profiler-panel.position-bottom.no-tabs .profiler-header,
#profiler-panel.position-top.no-tabs .profiler-header {
	width: 100%;
	height: 38px;
	border-bottom: none;
}

#profiler-panel.position-bottom.no-tabs .profiler-content-wrapper,
#profiler-panel.position-top.no-tabs .profiler-content-wrapper {
	display: none;
}

#profiler-panel.position-bottom.no-tabs .panel-resizer,
#profiler-panel.position-top.no-tabs .panel-resizer {
	display: none;
}

/* Vertical mode (right/left) without tabs */
#profiler-panel.position-right.no-tabs:not(.maximized),
#profiler-panel.position-left.no-tabs:not(.maximized) {
	width: 45px !important;
	min-width: 45px !important;
}

/* Vertical layout for header when no tabs */
#profiler-panel.position-right.no-tabs .profiler-header,
#profiler-panel.position-left.no-tabs .profiler-header {
	width: 100%;
	flex-direction: column;
	height: 100%;
	border-bottom: none;
}

/* Vertical layout for controls when no tabs */
#profiler-panel.position-right.no-tabs .profiler-controls,
#profiler-panel.position-left.no-tabs .profiler-controls {
	position: static;
	flex-direction: column-reverse;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	border-bottom: none;
	border-left: none;
	background: transparent;
}

#profiler-panel.position-right.no-tabs .profiler-controls button,
#profiler-panel.position-left.no-tabs .profiler-controls button {
	width: 100%;
	height: 45px;
	border-left: none;
	border-top: none;
	border-bottom: 1px solid var(--profiler-border);
}

#profiler-panel.position-right.no-tabs .profiler-content-wrapper,
#profiler-panel.position-left.no-tabs .profiler-content-wrapper {
	display: none;
}

#profiler-panel.position-right.no-tabs .profiler-tabs,
#profiler-panel.position-left.no-tabs .profiler-tabs {
	display: none;
}

#profiler-panel.position-right.no-tabs .panel-resizer,
#profiler-panel.position-left.no-tabs .panel-resizer {
	display: none;
}

/* Hide position toggle on mobile without tabs */
#profiler-panel.hide-position-toggle.position-right.no-tabs:not(.maximized),
#profiler-panel.hide-position-toggle.position-left.no-tabs:not(.maximized) {
	width: 45px !important;
	min-width: 45px !important;
}

/* Hide drag indicator on mobile devices */
#profiler-panel.is-mobile .tab-btn.active::before {
	display: none;
}

.profiler-header::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.profiler-header::-webkit-scrollbar-track {
	background: transparent;
}

.profiler-header::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	transition: background 0.3s ease;
}

.profiler-header::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.4);
}

.profiler-header::-webkit-scrollbar-corner {
	background: transparent;
}

#profiler-panel.dragging .profiler-header {
	cursor: grabbing !important;
}

#profiler-panel.dragging {
	opacity: 0.8;
}

.profiler-tabs {
	display: flex;
	cursor: grab;
	position: relative;
}

.profiler-tabs:active {
	cursor: grabbing;
}

.profiler-tabs::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.profiler-tabs::-webkit-scrollbar-track {
	background: transparent;
}

.profiler-tabs::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	transition: background 0.3s ease;
}

.profiler-tabs::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.4);
}

.profiler-tabs::-webkit-scrollbar-corner {
	background: transparent;
}

.profiler-controls {
	display: flex;
	position: absolute;
	right: 0;
	top: 0;
	height: 38px;
	background: var(--profiler-header-bg);
	border-bottom: 1px solid var(--profiler-border);
}

.tab-btn {
	position: relative;
	background: transparent;
	border: none;
	/*border-right: 1px solid var(--profiler-border);*/
	color: var(--text-secondary);
	padding: 8px 18px;
	cursor: default;
	display: flex;
	align-items: center;
	font-family: var(--font-family);
	font-weight: 600;
	font-size: 14px;
	user-select: none;
	transition: opacity 0.2s, transform 0.2s;
	touch-action: pan-x;
}

.tab-btn.active {
	border-bottom: 2px solid var(--accent-color);
	color: white;
}

.tab-btn.active::before {
	content: '⋮⋮';
	position: absolute;
	left: 3px;
	top: calc(50% - .1rem);
	transform: translateY(-50%);
	color: var(--profiler-border);
	font-size: 18px;
	letter-spacing: -2px;
	opacity: 0.6;
}

.tab-btn.no-detach.active::before {
	display: none;
}

#floating-btn,
#maximize-btn,
#hide-panel-btn {
	background: transparent;
	border: none;
	border-left: 1px solid var(--profiler-border);
	color: var(--text-secondary);
	width: 45px;
	height: 100%;
	cursor: pointer;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

/* Disable transitions in vertical mode to avoid broken animations */
#profiler-panel.position-right #floating-btn,
#profiler-panel.position-right #maximize-btn,
#profiler-panel.position-right #hide-panel-btn,
#profiler-panel.position-left #floating-btn,
#profiler-panel.position-left #maximize-btn,
#profiler-panel.position-left #hide-panel-btn {
	transition: background-color 0.2s, color 0.2s;
}

#floating-btn:hover,
#maximize-btn:hover,
#hide-panel-btn:hover {
	background-color: rgba(255, 255, 255, 0.1);
	color: var(--text-primary);
}

/* Hide maximize button when there are no tabs */
#profiler-panel.position-right.no-tabs #maximize-btn,
#profiler-panel.position-left.no-tabs #maximize-btn,
#profiler-panel.position-bottom.no-tabs #maximize-btn,
#profiler-panel.position-top.no-tabs #maximize-btn {
	display: none !important;
}

.profiler-content-wrapper {
	flex-grow: 1;
	overflow: hidden;
	position: relative;
}

.profiler-content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	font-size: 13px;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.2s, visibility 0.2s;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	user-select: none;
	-webkit-user-select: none;
}

.profiler-content.active {
	visibility: visible;
	opacity: 1;
}

.profiler-content {
	overflow: auto; /* make sure scrollbars can appear */
}

.profiler-content::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.profiler-content::-webkit-scrollbar-track {
	background: transparent;
}

.profiler-content::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	transition: background 0.3s ease;
}

.profiler-content::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.4);
}

.profiler-content::-webkit-scrollbar-corner {
	background: transparent;
}

.profiler-content {
	scrollbar-width: thin; /* "auto" | "thin" */
	scrollbar-color: rgba(0, 0, 0, 0.25) transparent;
}

.list-item-row {
	display: grid;
	align-items: center;
	padding: 4px 8px;
	border-radius: 3px;
	transition: background-color 0.2s;
	gap: 10px;
	border-bottom: none;
	user-select: none;
	-webkit-user-select: none;
}

.parameters .list-item-row {
	min-height: 31px;
}

.mini-panel-content .parameters .list-item-row {
	min-height: 21px;
}

.list-item-wrapper {
	margin-top: 2px;
	margin-bottom: 2px;
	user-select: none;
	-webkit-user-select: none;
}

.list-item-wrapper:first-child {
	/*margin-top: 0;*/
}

.list-item-wrapper:not(.header-wrapper):nth-child(odd) > .list-item-row {
	background-color: rgba(0,0,0,0.1);
}

.list-item-wrapper.header-wrapper>.list-item-row {
	color: var(--accent-color);
	background-color: rgba(0, 170, 255, 0.1);
}

.list-item-wrapper.header-wrapper>.list-item-row>.list-item-cell:first-child {
	font-weight: 600;
	line-height: 1;
}

.list-item-row.collapsible,
.list-item-row.actionable {
	cursor: pointer;
}

.list-item-row.collapsible {
	background-color: rgba(0, 170, 255, 0.15) !important;
	min-height: 23px;
}

.list-item-row.collapsible.alert,
.list-item-row.alert {
	background-color: rgba(244, 67, 54, 0.1) !important;
}

@media (hover: hover) {

	.list-item-row:hover:not(.collapsible):not(.no-hover),
	.list-item-row:hover:not(.no-hover),
	.list-item-row.actionable:hover,
	.list-item-row.collapsible.actionable:hover {
		background-color: rgba(255, 255, 255, 0.05) !important;
	}

	.list-item-row.collapsible:hover {
		background-color: rgba(0, 170, 255, 0.25) !important;
	}

}

.list-item-cell {
	white-space: pre;
	display: flex;
	align-items: center;
	user-select: none;
	-webkit-user-select: none;
}

.list-item-cell:not(:first-child) {
	justify-content: flex-end;
	font-weight: 600;
}

.list-header {
	display: grid;
	align-items: center;
	padding: 4px 8px;
	font-weight: 600;
	color: var(--text-secondary);
	padding-bottom: 6px;
	border-bottom: 1px solid var(--profiler-border);
	margin-bottom: 5px;
	gap: 10px;
	user-select: none;
	-webkit-user-select: none;
}

.list-item-wrapper.section-start {
	margin-top: 5px;
	margin-bottom: 5px;
}

.list-header .list-header-cell:not(:first-child) {
	text-align: right;
}

.list-children-container {
	padding-left: 1.5em;
	overflow: hidden;
	transition: max-height 0.1s ease-out;
	margin-top: 2px;
}

.list-children-container.closed {
	max-height: 0;
}

.item-toggler {
	display: inline-block;
	margin-right: 0.8em;
	text-align: left;
}

.list-item-row.open .item-toggler::before {
	content: '-';
}

.list-item-row:not(.open) .item-toggler::before {
	content: '+';
}

.list-item-cell .value.good {
	color: var(--color-green);
}

.list-item-cell .value.warn {
	color: var(--color-yellow);
}

.list-item-cell .value.bad {
	color: var(--color-red);
}

.list-scroll-wrapper {
	width: max-content;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	min-height: 100%;
}

.list-container.parameters .list-item-row:not(.collapsible) {
}

.graph-container {
	width: 100%;
	box-sizing: border-box;
	padding: 8px 0;
	position: relative;
}

.graph-svg {
	width: 100%;
	height: 80px;
	background-color: var(--profiler-header);
	border: 1px solid var(--profiler-border);
	border-radius: 4px;
}

.graph-path {
	stroke-width: 2;
	fill-opacity: 0.4;
}

.console-header {
	padding: 10px;
	border-bottom: 1px solid var(--profiler-border);
	display: flex;
	gap: 20px;
	flex-shrink: 0;
	align-items: center;
	justify-content: space-between;
}

.console-buttons-group {
	display: flex;
	gap: 20px;
}

.console-filter-input {
	background-color: var(--profiler-bg);
	border: 1px solid var(--profiler-border);
	color: var(--text-primary);
	border-radius: 4px;
	padding: 4px 8px;
	font-family: var(--font-mono);
	flex-grow: 1;
	max-width: 300px;
	border-radius: 15px;
}

.console-filter-input:focus {
	outline: none;
	border-color: var(--text-secondary);
}

.console-copy-button {
	background: transparent;
	border: none;
	color: var(--text-secondary);
	cursor: pointer;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	transition: color 0.2s, background-color 0.2s;
}

.console-copy-button:hover {
	color: var(--text-primary);
	background-color: var(--profiler-hover);
}

.console-copy-button.copied {
	color: var(--color-green);
}

#console-log {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 10px;
	overflow-y: auto;
	flex-grow: 1;
	user-select: text;
	-webkit-user-select: text;
}

.log-message {
	padding: 2px 5px;
	white-space: pre-wrap;
	word-break: break-all;
	border-radius: 3px;
	line-height: 1.5 !important;
}

.log-message.hidden {
	display: none;
}

.log-message.info {
	color: var(--text-primary);
}

.log-message.warn {
	color: var(--color-yellow);
}

.log-message.error {
	color: #f9dedc;
	background-color: rgba(244, 67, 54, 0.1);
}

.log-prefix {
	color: var(--text-secondary);
	margin-right: 8px;
}

.log-code {
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 3px;
	padding: 1px 4px;
}

.thumbnail-container {
	display: flex;
	align-items: center;
}

.thumbnail-svg {
	width: 40px;
	height: 22.5px;
	flex-shrink: 0;
	margin-right: 8px;
}

.param-control {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 10px;
	width: 100%;
}

.param-control input,
.param-control select,
.param-control button {
	background-color: var(--profiler-bg);
	border: 1px solid var(--profiler-border);
	color: var(--text-primary);
	border-radius: 4px;
	padding: 4px 6px;
	padding-bottom: 2px;
	font-family: var(--font-mono);
	width: 100%;
	box-sizing: border-box;
}

.param-control input:focus {
	outline: none;
	border-color: var(--accent-color);
}

.param-control select {
	padding-top: 3px;
	padding-bottom: 1px;
}

.param-control input[type="number"] {
	cursor: ns-resize;
}

.param-control input[type="color"] {
	padding: 2px;
}

.param-control button {
	cursor: pointer;
	transition: background-color 0.2s;
}

.param-control button:hover {
	background-color: var(--profiler-header);
}

.param-control-vector {
	display: flex;
	gap: 5px;
}

.custom-checkbox {
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	gap: 8px;
	will-change: transform;
}

.custom-checkbox input {
	display: none;
}

.custom-checkbox .checkmark {
	width: 14px;
	height: 14px;
	border: 1px solid var(--accent-color);
	border-radius: 3px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.2s, border-color 0.2s;
}

.custom-checkbox .checkmark::after {
	content: '';
	width: 6px;
	height: 6px;
	background-color: var(--accent-color);
	border-radius: 1px;
	display: block;
	transform: scale(0);
	transition: transform 0.2s;
}

.custom-checkbox input:checked+.checkmark {
	border-color: var(--accent-color);
}

.custom-checkbox input:checked+.checkmark::after {
	transform: scale(1);
}

.param-control input[type="range"] {
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 16px;
	background: var(--profiler-header);
	border-radius: 5px;
	border: 1px solid var(--profiler-border);
	outline: none;
	padding: 0px;
	padding-top: 8px;
}

.param-control input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 18px;
	height: 18px;
	background: var(--profiler-bg);
	border: 1px solid var(--accent-color);
	border-radius: 3px;
	cursor: pointer;
	margin-top: -8px;
}

.param-control input[type="range"]::-moz-range-thumb {
	width: 18px;
	height: 18px;
	background: var(--profiler-bg);
	border: 2px solid var(--accent-color);
	border-radius: 3px;
	cursor: pointer;
}

.param-control input[type="range"]::-moz-range-track {
	width: 100%;
	height: 16px;
	background: var(--profiler-header);
	border-radius: 5px;
	border: 1px solid var(--profiler-border);
}

/* Override .param-control styles for mini-panel-content */
.mini-panel-content input,
.mini-panel-content select,
.mini-panel-content button {
	padding: 2px 4px;
	height: 21px;
	line-height: 1.4;
	padding-top: 4px;
}

.mini-panel-content .param-control input,
.mini-panel-content .param-control select,
.mini-panel-content .param-control button {
	background-color: #1e1e24c2;
	line-height: 1.0;
}

.mini-panel-content .param-control select {
	padding: 2px 2px;
	padding-top: 3px;
}

.mini-panel-content .param-control input[type="number"]::-webkit-outer-spin-button,
.mini-panel-content .param-control input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.mini-panel-content .param-control input[type="number"] {
	-moz-appearance: textfield;
}

.mini-panel-content .list-item-cell span {
	position: relative;
	top: 1px;
	margin-left: 2px;
}

.mini-panel-content .custom-checkbox .checkmark {
	width: 12px;
	height: 12px;
	margin-bottom: 2px;
	will-change: transform;
}

.mini-panel-content .list-container.parameters .list-item-row:not(.collapsible) {
	margin-bottom: 2px;
}

@media screen and (max-width: 450px) and (orientation: portrait) {

	.console-filter-input {
		max-width: 100px;
	}

}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {

	.panel-resizer {
		top: -10px !important;
		height: 20px !important;
	}

	#profiler-panel.position-top .panel-resizer {
		top: auto !important;
		bottom: -10px !important;
		height: 20px !important;
	}

	#profiler-panel.position-left .panel-resizer {
		right: -10px !important;
		width: 20px !important;
		height: 100% !important;
	}

	#profiler-panel.position-right .panel-resizer {
		left: -10px !important;
		width: 20px !important;
		height: 100% !important;
	}

	.detached-tab-resizer-top,
	.detached-tab-resizer-bottom {
		height: 10px !important;
	}

	.detached-tab-resizer-left,
	.detached-tab-resizer-right {
		width: 10px !important;
	}

}

.drag-preview-indicator {
	position: fixed;
	background-color: rgba(0, 170, 255, 0.2);
	border: 2px dashed var(--accent-color);
	z-index: 999;
	pointer-events: none;
	transition: all 0.2s ease-out;
}

/* Detached Tab Windows */
.detached-tab-panel {
	position: fixed;
	width: 500px;
	height: 400px;
	background: var(--profiler-bg);
	border: 1px solid var(--profiler-border);
	border-radius: 8px;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
	z-index: 1002;
	display: flex;
	flex-direction: column;
	backdrop-filter: blur(10px);
	overflow: hidden;
	opacity: 1;
	visibility: visible;
	transition: opacity 0.2s, visibility 0.2s;
}

#profiler-panel:not(.visible) ~ * .detached-tab-panel,
body:has(#profiler-panel:not(.visible)) .detached-tab-panel {
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
}

.detached-tab-header {
	background: var(--profiler-header-bg);
	padding: 0 7px 0 15px;
	font-family: var(--font-family);
	font-size: 14px;
	color: var(--text-primary);
	font-weight: 600;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--profiler-border);
	cursor: grab;
	user-select: none;
	height: 38px;
	flex-shrink: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	touch-action: none;
}

.detached-tab-header:active {
	cursor: grabbing;
}

.detached-header-controls {
	display: flex;
	gap: 5px;
}

.detached-reattach-btn {
	background: transparent;
	border: none;
	color: var(--text-secondary);
	font-family: var(--font-family);
	font-size: 18px;
	line-height: 1;
	cursor: pointer;
	padding: 4px 8px;
	border-radius: 4px;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.detached-reattach-btn:hover {
	background: rgba(0, 170, 255, 0.2);
	color: var(--accent-color);
}

.detached-tab-content {
	flex: 1;
	overflow: auto;
	position: relative;
	background: var(--profiler-bg);
}

.detached-tab-content::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.detached-tab-content::-webkit-scrollbar-track {
	background: transparent;
}

.detached-tab-content::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	transition: background 0.3s ease;
}

.detached-tab-content::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.4);
}

.detached-tab-content::-webkit-scrollbar-corner {
	background: transparent;
}

.detached-tab-content .profiler-content {
	display: block !important;
	height: 100%;
	visibility: visible !important;
	opacity: 1 !important;
	position: relative !important;
}

.detached-tab-content .profiler-content > * {
	font-family: var(--font-mono);
	color: var(--text-primary);
}

.detached-tab-resizer {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 20px;
	height: 20px;
	cursor: nwse-resize;
	z-index: 10;
	touch-action: none;
}

.detached-tab-resizer::after {
	content: '';
	position: absolute;
	bottom: 2px;
	right: 2px;
	width: 12px;
	height: 12px;
	border-right: 2px solid var(--profiler-border);
	border-bottom: 2px solid var(--profiler-border);
	border-bottom-right-radius: 6px;
	opacity: 0.5;
}

.detached-tab-resizer:hover::after {
	opacity: 1;
	border-color: var(--accent-color);
}

/* Edge resizers */
.detached-tab-resizer-top {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 5px;
	cursor: ns-resize;
	z-index: 10;
	touch-action: none;
}

.detached-tab-resizer-right {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 5px;
	cursor: ew-resize;
	z-index: 10;
	touch-action: none;
}

.detached-tab-resizer-bottom {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 5px;
	cursor: ns-resize;
	z-index: 10;
	touch-action: none;
}

.detached-tab-resizer-left {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 5px;
	cursor: ew-resize;
	z-index: 10;
	touch-action: none;
}

/* Input number spin buttons - hide arrows */
/* Chrome, Safari, Edge, Opera */
#profiler-panel input[type="number"]::-webkit-outer-spin-button,
#profiler-panel input[type="number"]::-webkit-inner-spin-button,
.detached-tab-content input[type="number"]::-webkit-outer-spin-button,
.detached-tab-content input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
#profiler-panel input[type="number"],
.detached-tab-content input[type="number"] {
	-moz-appearance: textfield;
}

.panel-action-btn {
	background: transparent;
	color: var(--text-primary);
	border: 1px solid var(--profiler-border);
	border-radius: 4px;
	padding: 6px 12px;
	cursor: pointer;
	font-family: var(--font-family);
	font-size: 12px;
	transition: background-color 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
}

.panel-action-btn:hover {
	background-color: rgba(255, 255, 255, 0.05);
}
`,t=document.createElement("style");t.id="profiler-styles",t.textContent=e,document.head.appendChild(t)}}class Fu extends Ee{constructor(e){super(),this.inspector=e,this.tabs={},this.activeTabId=null,this.isResizing=!1,this.lastHeightBottom=350,this.lastWidthRight=450,this.position="bottom",this.detachedWindows=[],this.maxZIndex=1002,this.nextTabOriginalIndex=0,Ru.init(),this.setupShell(),this.setupResizing(),this.setupWindowResizeListener(),this.setupOrientationListener()}getSize(){return this.panel.classList.contains("visible")===!1||this.panel.classList.contains("no-tabs")?{width:0,height:0}:this.position==="right"?{width:this.panel.offsetWidth,height:0}:{width:0,height:this.panel.offsetHeight}}get isMobile(){return this.detectMobile()}get isSmallScreen(){return window.innerWidth<=768}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,t=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),n="ontouchstart"in window||navigator.maxTouchPoints>0;return t||n&&this.isSmallScreen}setupOrientationListener(){const e=()=>{if(!this.isMobile)return;const n=window.innerWidth>window.innerHeight?"right":"bottom";this.position!==n&&this.setPosition(n)};e(),window.addEventListener("orientationchange",e),window.addEventListener("resize",e)}setupWindowResizeListener(){const e=()=>{this.detachedWindows.forEach(n=>{this.constrainWindowToBounds(n.panel)})},t=()=>{if(this.panel.classList.contains("maximized"))return;const n=window.innerWidth,s=window.innerHeight;if(this.position==="bottom"){const r=this.panel.offsetHeight,o=s-50;r>o&&(this.panel.style.height=`${o}px`,this.lastHeightBottom=o)}else if(this.position==="right"){const r=this.panel.offsetWidth,o=n-50;r>o&&(this.panel.style.width=`${o}px`,this.lastWidthRight=o)}};window.addEventListener("resize",()=>{this.isSmallScreen?(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")):(this.floatingBtn.style.display="",this.panel.classList.remove("hide-position-toggle")),this.isMobile?this.panel.classList.add("is-mobile"):this.panel.classList.remove("is-mobile"),e(),t()})}constrainWindowToBounds(e){const t=window.innerWidth,n=window.innerHeight,s=e.offsetWidth,r=e.offsetHeight;let o=parseFloat(e.style.left)||e.offsetLeft||0,a=parseFloat(e.style.top)||e.offsetTop||0;const l=s/2,c=r/2;o+s>t+l&&(o=t+l-s),o<-l&&(o=-l),a+r>n+c&&(a=n+c-r),a<-c&&(a=-c),e.style.left=`${o}px`,e.style.top=`${a}px`}setupShell(){this.domElement=document.createElement("div"),this.domElement.id="profiler-shell",this.toggleButton=document.createElement("button"),this.toggleButton.id="profiler-toggle",this.toggleButton.innerHTML=`
<span id="builtin-tabs-container"></span>
<span id="toggle-text">
	<span id="fps-counter">-</span>
	<span class="fps-label">FPS</span>
</span>
<span id="toggle-icon">
	<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-ipad-horizontal-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" /><path d="M9 17h2" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
</span>
`,this.toggleButton.onclick=()=>this.togglePanel(),this.builtinTabsContainer=this.toggleButton.querySelector("#builtin-tabs-container"),this.miniPanel=document.createElement("div"),this.miniPanel.id="profiler-mini-panel",this.miniPanel.className="profiler-mini-panel",this.panel=document.createElement("div"),this.panel.id="profiler-panel";const e=document.createElement("div");e.className="profiler-header",e.addEventListener("wheel",r=>{r.deltaY!==0&&(r.preventDefault(),e.scrollLeft+=r.deltaY*.25)},{passive:!1}),this.tabsContainer=document.createElement("div"),this.tabsContainer.className="profiler-tabs";const t=document.createElement("div");t.className="profiler-controls",this.floatingBtn=document.createElement("button"),this.floatingBtn.id="floating-btn",this.floatingBtn.title="Switch to Right Side",this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.onclick=()=>this.togglePosition(),this.isSmallScreen&&(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")),this.isMobile&&this.panel.classList.add("is-mobile"),this.maximizeBtn=document.createElement("button"),this.maximizeBtn.id="maximize-btn",this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',this.maximizeBtn.onclick=()=>this.toggleMaximize();const n=document.createElement("button");n.id="hide-panel-btn",n.textContent="-",n.onclick=()=>this.togglePanel(),t.append(this.floatingBtn,this.maximizeBtn,n),e.append(this.tabsContainer,t),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="profiler-content-wrapper";const s=document.createElement("div");s.className="panel-resizer",this.panel.append(s,e,this.contentWrapper),this.domElement.append(this.toggleButton,this.miniPanel,this.panel),this.panel.classList.add(`position-${this.position}`),this.position==="right"&&(this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"))}setupResizing(){const e=this.panel.querySelector(".panel-resizer"),t=n=>{this.isResizing=!0,this.panel.classList.add("resizing"),e.setPointerCapture(n.pointerId);const s=n.clientX,r=n.clientY,o=this.panel.offsetHeight,a=this.panel.offsetWidth,l=d=>{if(!this.isResizing)return;d.preventDefault();const p=d.clientX,h=d.clientY;if(this.position==="bottom"){const m=o-(h-r);m>100&&m<window.innerHeight-50&&(this.panel.style.height=`${m}px`)}else if(this.position==="right"){const m=a-(p-s);m>200&&m<window.innerWidth-50&&(this.panel.style.width=`${m}px`)}this.dispatchEvent({type:"resize"})},c=()=>{this.isResizing=!1,this.panel.classList.remove("resizing"),e.removeEventListener("pointermove",l),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c),this.panel.classList.contains("maximized")||(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.saveLayout())};e.addEventListener("pointermove",l),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)};e.addEventListener("pointerdown",t)}toggleMaximize(){this.panel.classList.contains("maximized")?(this.panel.classList.remove("maximized"),this.position==="bottom"?(this.panel.style.height=`${this.lastHeightBottom}px`,this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width=`${this.lastWidthRight}px`),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'):(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.panel.classList.add("maximized"),this.position==="bottom"?(this.panel.style.height="100vh",this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width="100vw"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>'),this.dispatchEvent({type:"resize"})}hide(){this.miniPanel.classList.remove("visible"),this.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")})}show(e){if(this.hide(),e.builtinButton.classList.add("active"),!e.miniContent.firstChild)for(;e.content.firstChild;)e.miniContent.appendChild(e.content.firstChild);e.miniContent.style.display="block",this.miniPanel.classList.add("visible")}addTab(e){this.tabs[e.id]=e,e.originalIndex=this.nextTabOriginalIndex++,e.allowDetach===!1&&e.button.classList.add("no-detach"),e.onVisibilityChange=()=>this.updatePanelSize(),this.setupTabDragAndDrop(e),e.builtin||this.tabsContainer.appendChild(e.button),this.contentWrapper.appendChild(e.content),e.isVisible||(e.button.style.display="none",e.content.style.display="none"),e.builtin&&this.addBuiltinTab(e),this.updatePanelSize(),e.profiler=this}addBuiltinTab(e){const t=document.createElement("button");t.className="builtin-tab-btn",e.icon?t.innerHTML=e.icon:t.textContent=e.button.textContent.charAt(0).toUpperCase(),t.title=e.button.textContent;const n=document.createElement("div");n.className="mini-panel-content",n.style.display="none",e.builtinButton=t,e.miniContent=n,this.miniPanel.appendChild(n),t.onclick=s=>{s.stopPropagation(),n.style.display!=="none"&&n.children.length>0?this.hide():this.show(e)},this.builtinTabsContainer.appendChild(t),e.builtinButton=t,e.miniContent=n,e.isVisible||(t.style.display="none",n.style.display="none",Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(r=>r.style.display!=="none")||(this.builtinTabsContainer.style.display="none"))}removeTab(e){if(!(!e||this.tabs[e.id]===void 0)){if(delete this.tabs[e.id],e.isDetached&&e.detachedWindow){e.detachedWindow.panel&&e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel);const t=this.detachedWindows.indexOf(e.detachedWindow);t!==-1&&this.detachedWindows.splice(t,1)}if(e.builtin?(e.builtinButton&&e.builtinButton.parentNode&&e.builtinButton.parentNode.removeChild(e.builtinButton),e.miniContent&&e.miniContent.parentNode&&e.miniContent.parentNode.removeChild(e.miniContent),Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(n=>n.style.display!=="none")||(this.builtinTabsContainer.style.display="none")):e.button&&e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content&&e.content.parentNode&&e.content.parentNode.removeChild(e.content),this.activeTabId===e.id){this.activeTabId=null;const t=Object.values(this.tabs).filter(n=>!n.isDetached&&n.isVisible);t.length>0?this.setActiveTab(t[0].id):this.updatePanelSize()}else this.updatePanelSize();e.onVisibilityChange=null,e.profiler=null}}updatePanelSize(){Object.values(this.tabs).some(t=>!t.isDetached&&t.isVisible)?(this.panel.classList.remove("no-tabs"),Object.keys(this.tabs).length>0&&(this.position==="bottom"?parseInt(this.panel.style.height)===38&&(this.panel.style.height=`${this.lastHeightBottom}px`):this.position==="right"&&parseInt(this.panel.style.width)===45&&(this.panel.style.width=`${this.lastWidthRight}px`))):(this.panel.classList.add("no-tabs"),this.panel.classList.contains("maximized")&&(this.panel.classList.remove("maximized"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'),this.position==="bottom"?this.panel.style.height="38px":this.position==="right"&&(this.panel.style.width="45px")),this.dispatchEvent({type:"resize"})}setupTabDragAndDrop(e){if(e.button.addEventListener("click",()=>{t||this.setActiveTab(e.id)}),e.allowDetach===!1){e.button.style.cursor="default";return}let t=!1,n,s,r=!1,o=null;const a=10,l=p=>{n=p.clientX,s=p.clientY,t=!1,r=!1,e.button.setPointerCapture(p.pointerId)},c=p=>{const h=p.clientX,m=p.clientY,g=Math.abs(h-n),f=Math.abs(m-s);!t&&(g>a||f>a)&&(t=!0,e.button.style.cursor="grabbing",e.button.style.opacity="0.5",e.button.style.transform="scale(1.05)",o=this.createPreviewWindow(e,h,m),o.style.opacity="0.8"),t&&o&&(r=!0,p.preventDefault(),o.style.left=`${h-200}px`,o.style.top=`${m-20}px`)},d=()=>{if(t&&r&&o){o.parentNode&&o.parentNode.removeChild(o);const p=parseInt(o.style.left)+200,h=parseInt(o.style.top)+20;this.detachTab(e,p,h)}else r||this.setActiveTab(e.id),o&&o.parentNode&&o.parentNode.removeChild(o);e.button.style.opacity="",e.button.style.transform="",e.button.style.cursor="",t=!1,r=!1,o=null,e.button.removeEventListener("pointermove",c),e.button.removeEventListener("pointerup",d),e.button.removeEventListener("pointercancel",d)};e.button.addEventListener("pointerdown",p=>{this.isMobile&&p.pointerType!=="mouse"||(l(p),e.button.addEventListener("pointermove",c),e.button.addEventListener("pointerup",d),e.button.addEventListener("pointercancel",d))}),e.button.style.cursor="grab"}createPreviewWindow(e,t,n){const s=document.createElement("div");s.className="detached-tab-panel",s.style.left=`${t-200}px`,s.style.top=`${n-20}px`,s.style.pointerEvents="none",this.maxZIndex++,s.style.setProperty("z-index",this.maxZIndex,"important");const r=document.createElement("div");r.className="detached-tab-header";const o=document.createElement("span");o.textContent=e.button.textContent.replace("⇱","").trim(),r.appendChild(o);const a=document.createElement("div");a.className="detached-header-controls";const l=document.createElement("button");l.className="detached-reattach-btn",l.innerHTML="↩",a.appendChild(l),r.appendChild(a);const c=document.createElement("div");c.className="detached-tab-content";const d=document.createElement("div");return d.className="detached-tab-resizer",s.appendChild(d),s.appendChild(r),s.appendChild(c),document.body.appendChild(s),s}detachTab(e,t,n){if(e.isDetached||e.allowDetach===!1)return;const r=Array.from(this.tabsContainer.children).map(c=>Object.keys(this.tabs).find(d=>this.tabs[d].button===c)).filter(c=>c!==void 0),o=r.indexOf(e.id);let a=null;if(this.activeTabId===e.id){e.setActive(!1);const c=r.filter(d=>d!==e.id&&!this.tabs[d].isDetached&&this.tabs[d].isVisible);if(c.length>0){for(let d=o-1;d>=0;d--)if(c.includes(r[d])){a=r[d];break}if(!a){for(let d=o+1;d<r.length;d++)if(c.includes(r[d])){a=r[d];break}}a||(a=c[0])}}e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content.parentNode&&e.content.parentNode.removeChild(e.content);const l=this.createDetachedWindow(e,t,n);this.detachedWindows.push(l),e.isDetached=!0,e.detachedWindow=l,a?this.setActiveTab(a):this.activeTabId===e.id&&(this.activeTabId=null),this.updatePanelSize(),this.saveLayout()}createDetachedWindow(e,t,n){const s=window.innerWidth,r=window.innerHeight,o=400,a=300;let l=t-200,c=n-20;l+o>s&&(l=s-o),l<0&&(l=0),c+a>r&&(c=r-a),c<0&&(c=0);const d=document.createElement("div");d.className="detached-tab-panel",d.style.left=`${l}px`,d.style.top=`${c}px`,this.panel.classList.contains("visible")||(d.style.opacity="0",d.style.visibility="hidden",d.style.pointerEvents="none"),e.isVisible||(d.style.display="none");const p=document.createElement("div");p.className="detached-tab-header";const h=document.createElement("span");h.textContent=e.button.textContent.replace("⇱","").trim(),p.appendChild(h);const m=document.createElement("div");m.className="detached-header-controls";const g=document.createElement("button");g.className="detached-reattach-btn",g.innerHTML="↩",g.title="Reattach to main panel",g.onclick=()=>this.reattachTab(e),m.appendChild(g),p.appendChild(m);const f=document.createElement("div");f.className="detached-tab-content",f.appendChild(e.content),e.content.style.display="block",e.content.classList.add("active");const C=document.createElement("div");C.className="detached-tab-resizer-top";const w=document.createElement("div");w.className="detached-tab-resizer-right";const y=document.createElement("div");y.className="detached-tab-resizer-bottom";const _=document.createElement("div");_.className="detached-tab-resizer-left";const F=document.createElement("div");return F.className="detached-tab-resizer",d.appendChild(C),d.appendChild(w),d.appendChild(y),d.appendChild(_),d.appendChild(F),d.appendChild(p),d.appendChild(f),document.body.appendChild(d),this.setupDetachedWindowDrag(d,p,e),this.setupDetachedWindowResize(d,C,w,y,_,F),d.style.setProperty("z-index",this.maxZIndex,"important"),{panel:d,tab:e}}bringWindowToFront(e){this.maxZIndex++,e.style.setProperty("z-index",this.maxZIndex,"important")}setupDetachedWindowDrag(e,t,n){let s=!1,r,o,a,l;e.addEventListener("pointerdown",()=>{this.bringWindowToFront(e)});const c=h=>{if(h.target.classList.contains("detached-reattach-btn"))return;this.bringWindowToFront(e),s=!0,t.style.cursor="grabbing",t.setPointerCapture(h.pointerId),r=h.clientX,o=h.clientY;const m=e.getBoundingClientRect();a=m.left,l=m.top},d=h=>{if(!s)return;h.preventDefault();const m=h.clientX,g=h.clientY,f=m-r,C=g-o;let w=a+f,y=l+C;const _=window.innerWidth,F=window.innerHeight,V=e.offsetWidth,S=e.offsetHeight,Q=V/2,J=S/2;w+V>_+Q&&(w=_+Q-V),w<-Q&&(w=-Q),y+S>F+J&&(y=F+J-S),y<-J&&(y=-J),e.style.left=`${w}px`,e.style.top=`${y}px`;const W=this.panel.getBoundingClientRect();m>=W.left&&m<=W.right&&g>=W.top&&g<=W.bottom?(e.style.opacity="0.5",this.panel.style.outline="2px solid var(--accent-color)"):(e.style.opacity="",this.panel.style.outline="")},p=h=>{if(!s)return;s=!1,t.style.cursor="",e.style.opacity="",this.panel.style.outline="";const m=h.clientX,g=h.clientY;if(m!==void 0&&g!==void 0){const f=this.panel.getBoundingClientRect();m>=f.left&&m<=f.right&&g>=f.top&&g<=f.bottom&&n?this.reattachTab(n):this.saveLayout()}t.removeEventListener("pointermove",d),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",p)};t.addEventListener("pointerdown",h=>{c(h),t.addEventListener("pointermove",d),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",p)}),t.style.cursor="grab"}setupDetachedWindowResize(e,t,n,s,r,o){const c=(d,p)=>{let h=!1,m,g,f,C,w,y;const _=S=>{S.preventDefault(),S.stopPropagation(),h=!0,this.bringWindowToFront(e),d.setPointerCapture(S.pointerId),m=S.clientX,g=S.clientY,f=e.offsetWidth,C=e.offsetHeight,w=e.offsetLeft,y=e.offsetTop},F=S=>{if(!h)return;S.preventDefault();const Q=S.clientX,J=S.clientY,W=Q-m,ae=J-g,ct=window.innerWidth,dt=window.innerHeight;if(p==="right"||p==="corner"){const L=f+W,$=ct-w;L>=250&&L<=$&&(e.style.width=`${L}px`)}if(p==="bottom"||p==="corner"){const L=C+ae,$=dt-y;L>=150&&L<=$&&(e.style.height=`${L}px`)}if(p==="left"){const L=f-W,$=w+f-250;if(L>=250){const X=w+W;X>=0&&X<=$&&(e.style.width=`${L}px`,e.style.left=`${X}px`)}}if(p==="top"){const L=C-ae,$=y+C-150;if(L>=150){const X=y+ae;X>=0&&X<=$&&(e.style.height=`${L}px`,e.style.top=`${X}px`)}}},V=()=>{h=!1,d.removeEventListener("pointermove",F),d.removeEventListener("pointerup",V),d.removeEventListener("pointercancel",V),this.saveLayout()};d.addEventListener("pointerdown",S=>{_(S),d.addEventListener("pointermove",F),d.addEventListener("pointerup",V),d.addEventListener("pointercancel",V)})};c(t,"top"),c(n,"right"),c(s,"bottom"),c(r,"left"),c(o,"corner")}reattachTab(e){if(!e.isDetached)return;if(e.detachedWindow){const o=this.detachedWindows.indexOf(e.detachedWindow);o>-1&&this.detachedWindows.splice(o,1),e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel),e.detachedWindow=null}e.isDetached=!1;const n=Object.values(this.tabs).filter(o=>o.originalIndex!==void 0&&o.isVisible).sort((o,a)=>o.originalIndex-a.originalIndex),s=Array.from(this.tabsContainer.children);let r=0;for(const o of n){if(o.id===e.id)break;o.isDetached||r++}r>=s.length||s.length===0?this.tabsContainer.appendChild(e.button):this.tabsContainer.insertBefore(e.button,s[r]),this.contentWrapper.appendChild(e.content),this.setActiveTab(e.id),this.updatePanelSize(),this.saveLayout()}setActiveTab(e){this.activeTabId&&this.tabs[this.activeTabId]&&!this.tabs[this.activeTabId].isDetached&&this.tabs[this.activeTabId].setActive(!1),this.activeTabId=e,this.tabs[e]&&this.tabs[e].setActive(!0),this.saveLayout()}togglePanel(){this.panel.classList.toggle("visible"),this.toggleButton.classList.toggle("panel-open"),this.miniPanel.classList.toggle("panel-open");const e=this.panel.classList.contains("visible");this.detachedWindows.forEach(t=>{e?(t.panel.style.opacity="",t.panel.style.visibility="",t.panel.style.pointerEvents=""):(t.panel.style.opacity="0",t.panel.style.visibility="hidden",t.panel.style.pointerEvents="none")}),this.dispatchEvent({type:"resize"}),this.saveLayout()}togglePosition(){const e=this.position==="bottom"?"right":"bottom";this.setPosition(e)}setPosition(e){if(this.position===e)return;this.panel.style.transition="none";const t=this.panel.classList.contains("maximized");e==="right"?(this.position="right",this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",t?(this.panel.style.width="100vw",this.panel.style.height="100%"):(this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%")):(this.position="bottom",this.floatingBtn.classList.remove("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.title="Switch to Right Side",this.panel.classList.remove("position-right"),this.panel.classList.add("position-bottom"),this.toggleButton.classList.remove("position-right"),this.miniPanel.classList.remove("position-right"),this.panel.style.top="",this.panel.style.right="",this.panel.style.bottom="0",this.panel.style.left="0",t?(this.panel.style.width="100%",this.panel.style.height="100vh"):(this.panel.style.width="100%",this.panel.style.height=`${this.lastHeightBottom}px`)),setTimeout(()=>{this.panel.style.transition=""},50),this.updatePanelSize(),this.saveLayout()}saveLayout(){if(this.isLoadingLayout)return;const e={position:this.position,lastHeightBottom:this.lastHeightBottom,lastWidthRight:this.lastWidthRight,activeTabId:this.activeTabId,detachedTabs:[],isVisible:this.panel.classList.contains("visible")};this.detachedWindows.forEach(t=>{const n=t.tab,s=t.panel,r=parseFloat(s.style.left)||s.offsetLeft||0,o=parseFloat(s.style.top)||s.offsetTop||0,a=s.offsetWidth,l=s.offsetHeight;e.detachedTabs.push({tabId:n.id,originalIndex:n.originalIndex!==void 0?n.originalIndex:0,left:r,top:o,width:a,height:l})});try{oe("layout",e)}catch(t){console.warn("Failed to save profiler layout:",t)}}loadLayout(){this.isLoadingLayout=!0;try{const e=re("layout");if(Object.keys(e).length===0)return;if(e.detachedTabs&&e.detachedTabs.length>0){const s=window.innerWidth,r=window.innerHeight;e.detachedTabs=e.detachedTabs.map(o=>{let{left:a,top:l,width:c,height:d}=o;c>s&&(c=s-100),d>r&&(d=r-100);const p=c/2,h=d/2;return a+c>s+p&&(a=s+p-c),a<-p&&(a=-p),l+d>r+h&&(l=r+h-d),l<-h&&(l=-h),{...o,left:a,top:l,width:c,height:d}})}e.position&&(this.position=e.position),e.lastHeightBottom&&(this.lastHeightBottom=e.lastHeightBottom),e.lastWidthRight&&(this.lastWidthRight=e.lastWidthRight);const t=window.innerWidth,n=window.innerHeight;this.lastHeightBottom>n-50&&(this.lastHeightBottom=n-50),this.lastWidthRight>t-50&&(this.lastWidthRight=t-50),this.position==="right"?(this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%"):this.panel.style.height=`${this.lastHeightBottom}px`,e.isVisible&&(this.panel.classList.add("visible"),this.toggleButton.classList.add("panel-open")),e.activeTabId&&this.setActiveTab(e.activeTabId),e.detachedTabs&&e.detachedTabs.length>0&&(this.pendingDetachedTabs=e.detachedTabs,this.restoreDetachedTabs()),this.updatePanelSize(),this.panel.classList.contains("visible")&&this.miniPanel.classList.add("panel-open")}catch(e){console.warn("Failed to load profiler layout:",e)}finally{this.isLoadingLayout=!1}}restoreDetachedTabs(){if(!this.pendingDetachedTabs||this.pendingDetachedTabs.length===0)return;if(this.pendingDetachedTabs.forEach(t=>{const n=this.tabs[t.tabId];if(!n||n.isDetached)return;t.originalIndex!==void 0&&(n.originalIndex=t.originalIndex),n.button.parentNode&&n.button.parentNode.removeChild(n.button),n.content.parentNode&&n.content.parentNode.removeChild(n.content);const s=this.createDetachedWindow(n,0,0);s.panel.style.left=`${t.left}px`,s.panel.style.top=`${t.top}px`,s.panel.style.width=`${t.width}px`,s.panel.style.height=`${t.height}px`,this.constrainWindowToBounds(s.panel),this.detachedWindows.push(s),n.isDetached=!0,n.detachedWindow=s}),this.pendingDetachedTabs=null,this.detachedWindows.forEach(t=>{const n=parseInt(getComputedStyle(t.panel).zIndex)||0;n>this.maxZIndex&&(this.maxZIndex=n)}),!this.activeTabId||!this.tabs[this.activeTabId]||this.tabs[this.activeTabId].isDetached||!this.tabs[this.activeTabId].isVisible){const n=Object.keys(this.tabs).filter(s=>!this.tabs[s].isDetached&&this.tabs[s].isVisible);if(n.length>0){const r=Array.from(this.tabsContainer.children).map(o=>Object.keys(this.tabs).find(a=>this.tabs[a].button===o)).filter(o=>o!==void 0&&!this.tabs[o].isDetached&&this.tabs[o].isVisible);this.setActiveTab(r[0]||n[0])}else this.activeTabId=null}this.updatePanelSize()}}class ee extends Ee{constructor(e,t={}){super(),this.id=e.toLowerCase(),this.button=document.createElement("button"),this.button.className="tab-btn",this.button.textContent=e,this.content=document.createElement("div"),this.content.id=`${this.id}-content`,this.content.className="profiler-content",this._isActive=!1,this.isVisible=!0,this.isDetached=!1,this.detachedWindow=null,this.allowDetach=t.allowDetach!==void 0?t.allowDetach:!0,this.builtin=t.builtin!==void 0?t.builtin:!1,this.icon=t.icon||null,this.builtinButton=null,this.miniContent=null,this.profiler=null,this.onVisibilityChange=null}get inspector(){return this.profiler.inspector}get isActive(){return this.profiler&&this.profiler.panel.classList.contains("visible")?this.isDetached||this._isActive:!1}set isActive(e){this._isActive=e}init(){}update(){}setActive(e){this.button.classList.toggle("active",e),this.content.classList.toggle("active",e),this.isActive=e}show(){this.content.style.display="",this.button.style.display="",this.isVisible=!0,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display=""),this.onVisibilityChange&&this.onVisibilityChange(),this.showBuiltin()}hide(){this.content.style.display="none",this.button.style.display="none",this.isVisible=!1,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display="none"),this.onVisibilityChange&&this.onVisibilityChange(),this.hideBuiltin()}showBuiltin(){if(this.builtin&&(this.profiler&&this.profiler.builtinTabsContainer&&(this.profiler.builtinTabsContainer.style.display=""),this.builtinButton&&(this.builtinButton.style.display=""),this.miniContent&&this.profiler)){if(this.profiler.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")}),this.builtinButton&&this.builtinButton.classList.add("active"),!this.miniContent.firstChild)for(;this.content.firstChild;)this.miniContent.appendChild(this.content.firstChild);this.miniContent.style.display="block",this.profiler.miniPanel.classList.add("visible")}}hideBuiltin(){if(this.builtin){if(this.builtinButton&&(this.builtinButton.style.display="none"),this.miniContent&&(this.miniContent.style.display="none",this.miniContent.firstChild))for(;this.miniContent.firstChild;)this.content.appendChild(this.miniContent.firstChild);this.builtinButton&&this.builtinButton.classList.remove("active"),this.profiler&&(Array.from(this.profiler.miniPanel.querySelectorAll(".mini-panel-content")).some(n=>n.style.display!=="none")||this.profiler.miniPanel.classList.remove("visible"),Array.from(this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(n=>n.style.display!=="none")||(this.profiler.builtinTabsContainer.style.display="none"))}}}class fe{constructor(...e){this.headers=e,this.children=[],this.domElement=document.createElement("div"),this.domElement.className="list-container",this.domElement.style.padding="10px",this.id=`list-${Math.random().toString(36).slice(2,11)}`,this.domElement.dataset.listId=this.id,this.gridStyleElement=document.createElement("style"),this.domElement.appendChild(this.gridStyleElement);const t=document.createElement("div");t.className="list-header",this.headers.forEach(n=>{const s=document.createElement("div");s.className="list-header-cell",s.textContent=n,t.appendChild(s)}),this.domElement.appendChild(t)}setGridStyle(e){this.gridStyleElement.textContent=`
[data-list-id="${this.id}"] > .list-header,
[data-list-id="${this.id}"] .list-item-row {
	grid-template-columns: ${e};
}
`}add(e){e.parent!==null&&e.parent.remove(e),e.domElement.classList.add("header-wrapper","section-start"),e.parent=this,this.children.push(e),this.domElement.appendChild(e.domElement)}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.domElement.removeChild(e.domElement),e.parent=null),this}}class Fe{constructor(e=512){this.maxPoints=e,this.lines={},this.limit=0,this.limitIndex=0,this.domElement=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.domElement.setAttribute("class","graph-svg")}addLine(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("class","graph-path"),n.style.stroke=t,n.style.fill=t,this.domElement.appendChild(n),this.lines[e]={path:n,color:t,points:[]}}addPoint(e,t){const n=this.lines[e];n&&(n.points.push(t),n.points.length>this.maxPoints&&n.points.shift(),t>this.limit&&(this.limit=t,this.limitIndex=0))}resetLimit(){this.limit=0,this.limitIndex=0}update(){const e=this.domElement.clientWidth,t=this.domElement.clientHeight;if(e===0)return;const n=e/(this.maxPoints-1);for(const s in this.lines){const r=this.lines[s];let o=`M 0,${t}`;for(let l=0;l<r.points.length;l++){const c=l*n,d=t-r.points[l]/this.limit*t;o+=` L ${c},${d}`}o+=` L ${(r.points.length-1)*n},${t} Z`;const a=e-(r.points.length-1)*n;r.path.setAttribute("transform",`translate(${a}, 0)`),r.path.setAttribute("d",o)}this.limitIndex++>this.maxPoints&&this.resetLimit()}}class v{constructor(...e){this.children=[],this.isOpen=!0,this.childrenContainer=null,this.parent=null,this.domElement=document.createElement("div"),this.domElement.className="list-item-wrapper",this.itemRow=document.createElement("div"),this.itemRow.className="list-item-row",this.userData={},this.data=e,this.data.forEach(t=>{const n=document.createElement("div");n.className="list-item-cell",t instanceof HTMLElement?n.appendChild(t):n.append(String(t)),this.itemRow.appendChild(n)}),this.domElement.appendChild(this.itemRow),this.onItemClick=this.onItemClick.bind(this)}onItemClick(e){e.target.closest("button, a, input, label")||this.toggle()}add(e,t=this.children.length){return e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.splice(t,0,e),this.itemRow.classList.add("collapsible"),this.childrenContainer||(this.childrenContainer=document.createElement("div"),this.childrenContainer.className="list-children-container",this.childrenContainer.classList.toggle("closed",!this.isOpen),this.domElement.appendChild(this.childrenContainer),this.itemRow.addEventListener("click",this.onItemClick)),this.childrenContainer.insertBefore(e.domElement,this.childrenContainer.children[t]||null),this.updateToggler(),this}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.childrenContainer.removeChild(e.domElement),e.parent=null,this.children.length===0&&(this.itemRow.classList.remove("collapsible"),this.itemRow.removeEventListener("click",this.onItemClick),this.childrenContainer.remove(),this.childrenContainer=null),this.updateToggler()),this}updateToggler(){const e=this.itemRow.querySelector(".list-item-cell:first-child");let t=this.itemRow.querySelector(".item-toggler");this.children.length>0?(t||(t=document.createElement("span"),t.className="item-toggler",e.prepend(t)),this.isOpen&&this.itemRow.classList.add("open")):t&&t.remove()}toggle(){return this.isOpen=!this.isOpen,this.itemRow.classList.toggle("open",this.isOpen),this.childrenContainer&&this.childrenContainer.classList.toggle("closed",!this.isOpen),this}close(){return this.isOpen&&this.toggle(),this}}function b(u=null){const e=document.createElement("span");return e.className="value",u!==null&&(e.id=u),e}function x(u,e){const t=u instanceof HTMLElement?u:document.getElementById(u);t&&t.textContent!==e&&(t.textContent=e)}function Nu(u){const e=u.lastIndexOf("/");if(e===-1)return{path:"",name:u.trim()};const t=u.substring(0,e).trim(),n=u.substring(e+1).trim();return{path:t,name:n}}function zu(u){return u.replace(/([a-z0-9])([A-Z])/g,"$1 $2").trim()}function H(u,e=2){if(u===0)return"0 Bytes";const t=1024,n=e<0?0:e,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(u)/Math.log(t));return parseFloat((u/Math.pow(t,r)).toFixed(n))+" "+s[r]}class Du extends ee{constructor(e={}){super("Performance",e);const t=new fe("Name","CPU","GPU","Total");t.setGridStyle("minmax(200px, 2fr) 80px 80px 80px"),t.domElement.style.minWidth="600px";const n=document.createElement("div");n.className="list-scroll-wrapper",n.appendChild(t.domElement),this.content.appendChild(n);const s=document.createElement("div");s.className="graph-container";const r=new Fe;r.addLine("fps","var( --color-fps )"),s.append(r.domElement);const o=new v("Graph Stats",b(),b(),b("graph-fps-counter"));t.add(o);const a=new v(s);a.itemRow.childNodes[0].style.gridColumn="1 / -1",o.add(a);const l=new v("Frame Stats",b(),b(),b());t.add(l);const c=new v("Miscellaneous & Idle",b(),b(),b());c.domElement.firstChild.style.backgroundColor="#00ff0b1a",c.domElement.firstChild.classList.add("no-hover"),l.add(c),this.notInUse=new Map,this.frameStats=l,this.graphStats=o,this.graph=r,this.miscellaneous=c,this.currentRender=null,this.currentItem=null,this.frameItems=new Map}resolveStats(e,t){const n=e.getStatsData(t.cid);let s=n.item;if(s===void 0)s=new v(b(),b(),b(),b()),t.name?t.isComputeStats===!0&&(t.name=`${t.name} [ Compute ]`):t.name=`Unnamed ${t.cid}`,s.userData.name=t.name,this.currentItem.add(s),n.item=s;else{s.userData.name=t.name,this.notInUse.has(t.cid)&&(s.domElement.firstElementChild.classList.remove("alert"),this.notInUse.delete(t.cid));const a=t.parent.children.indexOf(t);(s.parent===null||s.parent.children.indexOf(s)!==a)&&this.currentItem.add(s,a)}let r=s.userData.name;t.isComputeStats&&(r+=" [ Compute ]"),x(s.data[0],r),x(s.data[1],n.cpu.toFixed(2)),x(s.data[2],t.gpuNotAvailable===!0?"-":n.gpu.toFixed(2)),x(s.data[3],n.total.toFixed(2));const o=this.currentItem;this.currentItem=s;for(const a of t.children)this.resolveStats(e,a);this.currentItem=o,this.frameItems.set(t.cid,s)}updateGraph(e){this.graph.addPoint("fps",e.fps),this.graph.update()}addNotInUse(e,t){t.domElement.firstElementChild.classList.add("alert"),this.notInUse.set(e,{item:t,time:performance.now()}),this.updateNotInUse(e)}updateNotInUse(e){const{item:t,time:n}=this.notInUse.get(e),s=performance.now(),o=5-Math.floor((s-n)/1e3);if(o>=0){const a="*".repeat(Math.max(0,o)),l=t.domElement.querySelector(".list-item-cell .value");x(l,t.userData.name+" (not in use) "+a)}else t.domElement.firstElementChild.classList.remove("alert"),t.parent.remove(t),this.notInUse.delete(e)}updateText(e,t){const n=new Map(this.frameItems);this.frameItems.clear(),this.currentItem=this.frameStats;for(const s of t.children)this.resolveStats(e,s);for(const[s,r]of n)this.frameItems.has(s)||(this.addNotInUse(s,r),n.delete(s));for(const s of this.notInUse.keys())this.updateNotInUse(s);x("graph-fps-counter",e.fps.toFixed()+" FPS"),x(this.frameStats.data[1],t.cpu.toFixed(2)),x(this.frameStats.data[2],t.gpu.toFixed(2)),x(this.frameStats.data[3],t.total.toFixed(2)),x(this.miscellaneous.data[1],t.miscellaneous.toFixed(2)),x(this.miscellaneous.data[2],"-"),x(this.miscellaneous.data[3],t.miscellaneous.toFixed(2)),this.currentItem=null}}class Pu extends ee{constructor(e={}){super("Memory",e);const t=new fe("Name","Count","Size");t.setGridStyle("minmax(200px, 2fr) 60px 100px"),t.domElement.style.minWidth="300px";const n=document.createElement("div");n.className="list-scroll-wrapper",n.appendChild(t.domElement),this.content.appendChild(n);const s=document.createElement("div");s.className="graph-container";const r=new Fe;r.addLine("total","var( --color-yellow )"),s.append(r.domElement);const o=new v("Graph Stats","","");t.add(o);const a=new v(s);a.itemRow.childNodes[0].style.gridColumn="1 / -1",o.add(a),this.memoryStats=new v("Renderer Info","",b()),this.memoryStats.domElement.firstChild.classList.add("no-hover"),t.add(this.memoryStats),this.attributes=new v("Attributes",b(),b()),this.memoryStats.add(this.attributes),this.geometries=new v("Geometries",b(),"N/A"),this.memoryStats.add(this.geometries),this.indexAttributes=new v("Index Attributes",b(),b()),this.memoryStats.add(this.indexAttributes),this.indirectStorageAttributes=new v("Indirect Storage Attributes",b(),b()),this.memoryStats.add(this.indirectStorageAttributes),this.programs=new v("Programs",b(),b()),this.memoryStats.add(this.programs),this.readbackBuffers=new v("Readback Buffers",b(),b()),this.memoryStats.add(this.readbackBuffers),this.renderTargets=new v("Render Targets",b(),"N/A"),this.memoryStats.add(this.renderTargets),this.storageAttributes=new v("Storage Attributes",b(),b()),this.memoryStats.add(this.storageAttributes),this.textures=new v("Textures",b(),b()),this.memoryStats.add(this.textures),this.graph=r}updateGraph(e){const t=e.getRenderer();if(!t)return;const n=t.info.memory;this.graph.addPoint("total",n.total),this.graph.limit===0&&(this.graph.limit=1),this.graph.update()}updateText(e){const t=e.getRenderer();if(!t)return;const n=t.info.memory;x(this.memoryStats.data[2],H(n.total)),x(this.attributes.data[1],n.attributes.toString()),x(this.attributes.data[2],H(n.attributesSize)),x(this.geometries.data[1],n.geometries.toString()),x(this.indexAttributes.data[1],n.indexAttributes.toString()),x(this.indexAttributes.data[2],H(n.indexAttributesSize)),x(this.indirectStorageAttributes.data[1],n.indirectStorageAttributes.toString()),x(this.indirectStorageAttributes.data[2],H(n.indirectStorageAttributesSize)),x(this.programs.data[1],n.programs.toString()),x(this.programs.data[2],H(n.programsSize)),x(this.readbackBuffers.data[1],n.readbackBuffers.toString()),x(this.readbackBuffers.data[2],H(n.readbackBuffersSize)),x(this.renderTargets.data[1],n.renderTargets.toString()),x(this.storageAttributes.data[1],n.storageAttributes.toString()),x(this.storageAttributes.data[2],H(n.storageAttributesSize)),x(this.textures.data[1],n.textures.toString()),x(this.textures.data[2],H(n.texturesSize))}}class Vu extends ee{constructor(e={}){super("Console",e),this.filters={info:!0,warn:!0,error:!0},this.filterText="",this.buildHeader(),this.logContainer=document.createElement("div"),this.logContainer.id="console-log",this.content.appendChild(this.logContainer)}buildHeader(){const e=document.createElement("div");e.className="console-header";const t=document.createElement("input");t.type="text",t.className="console-filter-input",t.placeholder="Filter...",t.addEventListener("input",r=>{this.filterText=r.target.value.toLowerCase(),this.applyFilters()});const n=document.createElement("button");n.className="console-copy-button",n.title="Copy all",n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',n.addEventListener("click",()=>this.copyAll(n));const s=document.createElement("div");s.className="console-buttons-group",Object.keys(this.filters).forEach(r=>{const o=document.createElement("label");o.className="custom-checkbox",o.style.color=`var(--${r==="info"?"text-primary":"color-"+(r==="warn"?"yellow":"red")})`;const a=document.createElement("input");a.type="checkbox",a.checked=this.filters[r],a.dataset.type=r;const l=document.createElement("span");l.className="checkmark",o.appendChild(a),o.appendChild(l),o.append(r.charAt(0).toUpperCase()+r.slice(1)),s.appendChild(o)}),s.addEventListener("change",r=>{const o=r.target.dataset.type;o in this.filters&&(this.filters[o]=r.target.checked,this.applyFilters())}),s.appendChild(n),e.appendChild(t),e.appendChild(s),this.content.appendChild(e)}applyFilters(){this.logContainer.querySelectorAll(".log-message").forEach(t=>{const n=t.dataset.type,s=t.dataset.rawText.toLowerCase(),r=this.filters[n],o=s.includes(this.filterText);t.classList.toggle("hidden",!(r&&o))})}copyAll(e){const n=this.logContainer.ownerDocument.defaultView.getSelection(),s=n.toString(),r=s&&this.logContainer.contains(n.anchorNode);let o;if(r)o=s;else{const a=this.logContainer.querySelectorAll(".log-message:not(.hidden)");o=Array.from(a).map(l=>l.dataset.rawText).join(`
`)}navigator.clipboard.writeText(o),e.classList.add("copied"),setTimeout(()=>e.classList.remove("copied"),350)}_getIcon(e,t){let n;return t==="tip"?n="💭":t==="tsl"?n="✨":t==="webgpurenderer"?n="🎨":e==="warn"?n="⚠️":e==="error"?n="🔴":e==="info"&&(n="ℹ️"),n}_formatMessage(e,t){const n=document.createDocumentFragment(),s=t.match(/^([\w\.]+:\s)/);let r=t;if(s){const a=s[0],l=a.slice(0,-2).split("."),c=(l.length>1?l[l.length-1]:l[0])+":",d=this._getIcon(e,c.split(":")[0].toLowerCase());n.appendChild(document.createTextNode(d+" "));const p=document.createElement("span");p.className="log-prefix",p.textContent=c,n.appendChild(p),r=t.substring(a.length)}const o=r.split(/(".*?"|'.*?'|`.*?`)/g).map(a=>a.trim()).filter(Boolean);return o.forEach((a,l)=>{if(/^("|'|`)/.test(a)){const c=document.createElement("span");c.className="log-code",c.textContent=a.slice(1,-1),n.appendChild(c)}else l>0&&(a=" "+a),l<o.length-1&&(a+=" "),n.appendChild(document.createTextNode(a))}),n}addMessage(e,t){const n=document.createElement("div");n.className=`log-message ${e}`,n.dataset.type=e,n.dataset.rawText=t,n.appendChild(this._formatMessage(e,t));const s=this.filters[e],r=t.toLowerCase().includes(this.filterText);n.classList.toggle("hidden",!(s&&r)),this.logContainer.appendChild(n),this.logContainer.scrollTop=this.logContainer.scrollHeight,this.logContainer.children.length>200&&this.logContainer.removeChild(this.logContainer.firstChild)}}class Z extends Ee{constructor(){super(),this.domElement=document.createElement("div"),this.domElement.className="param-control",this._onChangeFunction=null,this.addEventListener("change",e=>{requestAnimationFrame(()=>{this._onChangeFunction&&this._onChangeFunction(e.value)})})}setValue(){return this.dispatchChange(),this}getValue(){return null}dispatchChange(){this.dispatchEvent({type:"change",value:this.getValue()})}onChange(e){return this._onChangeFunction=e,this}}class rt extends Z{constructor({value:e=0,step:t=.1,min:n=-1/0,max:s=1/0}){super(),this.input=document.createElement("input"),this.input.type="number",this.input.value=e,this.input.step=t,this.input.min=n,this.input.max=s,this.input.addEventListener("change",this._onChangeValue.bind(this)),this.domElement.appendChild(this.input),this.addDragHandler()}_onChangeValue(){const e=parseFloat(this.input.value),t=parseFloat(this.input.min),n=parseFloat(this.input.max);e>n?this.input.value=n:e<t?this.input.value=t:isNaN(e)&&(this.input.value=t),this.dispatchChange()}addDragHandler(){let e=!1,t,n;this.input.addEventListener("mousedown",s=>{e=!0,t=s.clientY,n=parseFloat(this.input.value),document.body.style.cursor="ns-resize"}),document.addEventListener("mousemove",s=>{if(e){const r=t-s.clientY,o=parseFloat(this.input.step)||1,a=parseFloat(this.input.min),l=parseFloat(this.input.max);let c=o;!isNaN(l)&&isFinite(a)&&(c=(l-a)/100);const d=r*c;let p=n+d;p=Math.max(a,Math.min(p,l));const h=(String(o).split(".")[1]||[]).length;this.input.value=p.toFixed(h),this.input.dispatchEvent(new Event("input")),this.dispatchChange()}}),document.addEventListener("mouseup",()=>{e&&(e=!1,document.body.style.cursor="default")})}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return parseFloat(this.input.value)}}class Au extends Z{constructor({value:e=!1}){super();const t=document.createElement("label");t.className="custom-checkbox";const n=document.createElement("input");n.type="checkbox",n.checked=e,this.checkbox=n;const s=document.createElement("span");s.className="checkmark",t.appendChild(n),t.appendChild(s),this.domElement.appendChild(t),n.addEventListener("change",()=>{this.dispatchChange()})}setValue(e){return this.checkbox.checked=e,super.setValue(e)}getValue(){return this.checkbox.checked}}class Ou extends Z{constructor({value:e=0,min:t=0,max:n=1,step:s=.01}){super(),this.slider=document.createElement("input"),this.slider.type="range",this.slider.min=t,this.slider.max=n,this.slider.step=s;const r=new rt({value:e,min:t,max:n,step:s});this.numberInput=r.input,this.numberInput.style.flexBasis="80px",this.numberInput.style.flexShrink="0",this.slider.value=e,this.domElement.append(this.slider,this.numberInput),this.slider.addEventListener("input",()=>{this.numberInput.value=this.slider.value,this.dispatchChange()}),r.addEventListener("change",()=>{this.slider.value=parseFloat(this.numberInput.value),this.dispatchChange()})}setValue(e){return this.slider.value=e,this.numberInput.value=e,super.setValue(e)}getValue(){return parseFloat(this.slider.value)}step(e){return this.slider.step=e,this.numberInput.step=e,this}}class Wu extends Z{constructor({options:e=[],value:t=""}){super();const n=document.createElement("select"),s=(r,o)=>{const a=document.createElement("option");return a.value=r,a.textContent=r,o==t&&(a.selected=!0),n.appendChild(a),a};Array.isArray(e)?e.forEach(r=>s(r,r)):Object.entries(e).forEach(([r,o])=>s(r,o)),this.domElement.appendChild(n),n.addEventListener("change",()=>{this.dispatchChange()}),this.options=e,this.select=n}getValue(){const e=this.options;return Array.isArray(e)?e[this.select.selectedIndex]:e[this.select.value]}}class Uu extends Z{constructor({value:e="#ffffff"}){super();const t=document.createElement("input");t.type="color",t.value=this._getColorHex(e),this.colorInput=t,this._value=e,t.addEventListener("input",()=>{const n=t.value;this._value.isColor?this._value.setHex(parseInt(n.slice(1),16)):this._value=n,this.dispatchChange()}),this.domElement.appendChild(t)}_getColorHex(e){return e.isColor&&(e=e.getHex()),typeof e=="number"?e=`#${e.toString(16)}`:e[0]!=="#"&&(e="#"+e),e}getValue(){let e=this._value;return typeof e=="string"&&(e=parseInt(e.slice(1),16)),e}}class Hu extends Z{constructor({text:e="Button",value:t=()=>{}}){super();const n=document.createElement("button");n.textContent=e,n.onclick=t,this.domElement.appendChild(n)}}class ju extends Z{constructor({value:e=""}){super();const t=document.createElement("input");t.type="text",t.value=e,this.input=t,t.addEventListener("input",()=>{this.dispatchChange()}),this.domElement.appendChild(t)}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return this.input.value}}class Ne{constructor(e,t){this.parameters=e,this.name=t,this.paramList=new v(t),this.objects=[]}close(){return this.paramList.close(),this}add(e,t,...n){const r=typeof e[t];let o=null;return typeof n[0]=="object"?o=this.addSelect(e,t,n[0]):r==="number"?n.length>=2?o=this.addSlider(e,t,...n):o=this.addNumber(e,t,...n):r==="boolean"?o=this.addBoolean(e,t):r==="string"?o=this.addString(e,t):r==="function"&&(o=this.addButton(e,t,...n)),o}_addParameter(e,t,n,s){n.name=r=>(s.data[0].textContent=r,n),n.listen=()=>{const r=()=>{const o=n.getValue(),a=e[t];o!==a&&n.setValue(a),requestAnimationFrame(r)};return requestAnimationFrame(r),n},this._registerParameter(e,t,n,s)}_registerParameter(e,t,n,s){this.objects.push({object:e,key:t,editor:n,subItem:s})}addString(e,t){const n=e[t],s=new ju({value:n});s.addEventListener("change",({value:l})=>{e[t]=l});const r=b();r.textContent=t;const o=new v(r,s.domElement);return this.paramList.add(o),o.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,s,o),s}addFolder(e){const t=new Ne(this.parameters,e);return this.paramList.add(t.paramList),t}addBoolean(e,t){const n=e[t],s=new Au({value:n});s.addEventListener("change",({value:l})=>{e[t]=l});const r=b();r.textContent=t;const o=new v(r,s.domElement);this.paramList.add(o);const a=o.domElement.firstChild;return a.classList.add("actionable"),a.addEventListener("click",l=>{if(l.target.closest("label"))return;const c=a.querySelector('input[type="checkbox"]');c&&(c.checked=!c.checked,c.dispatchEvent(new Event("change")))}),this._addParameter(e,t,s,o),s}addSelect(e,t,n){const s=e[t],r=new Wu({options:n,value:s});r.addEventListener("change",({value:c})=>{e[t]=c});const o=b();o.textContent=t;const a=new v(o,r.domElement);return this.paramList.add(a),a.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,r,a),r}addColor(e,t){const n=e[t],s=new Uu({value:n});s.addEventListener("change",({value:l})=>{e[t]=l});const r=b();r.textContent=t;const o=new v(r,s.domElement);return this.paramList.add(o),o.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,s,o),s}addSlider(e,t,n=0,s=1,r=.01){const o=e[t],a=new Ou({value:o,min:n,max:s,step:r});a.addEventListener("change",({value:p})=>{e[t]=p});const l=b();l.textContent=t;const c=new v(l,a.domElement);return this.paramList.add(c),c.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,a,c),a}addNumber(e,t,...n){const s=e[t],[r,o]=n,a=new rt({value:s,min:r,max:o});a.addEventListener("change",({value:p})=>{e[t]=p});const l=b();l.textContent=t;const c=new v(l,a.domElement);return this.paramList.add(c),c.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,a,c),a}addButton(e,t){const n=e[t],s=new Hu({text:t,value:n});s.addEventListener("change",({value:a})=>{e[t]=a});const r=new v(s.domElement);return r.itemRow.childNodes[0].style.gridColumn="1 / -1",this.paramList.add(r),r.domElement.firstChild.classList.add("actionable"),s.name=a=>(s.domElement.childNodes[0].textContent=a,s),this._registerParameter(e,t,s,r),s}}class ot extends ee{constructor(e={}){super(e.name||"Parameters",e);const t=new fe("Property","Value");t.domElement.classList.add("parameters"),t.setGridStyle(".5fr 1fr"),t.domElement.style.minWidth="300px";const n=document.createElement("div");n.className="list-scroll-wrapper",n.appendChild(t.domElement),this.content.appendChild(n),this.paramList=t,this.groups=[]}createGroup(e){const t=new Ne(this,e);return this.paramList.add(t.paramList),this.groups.push(t),t}}const Pe="../extensions/extensions.json",Ve=ue.prototype.init;function at(u){u?ue.prototype.init=async function(){if(this.backend.isWebGLBackend!==!0){const e=this.backend.parameters;this.backend=new pi(e)}return Ve.call(this)}:ue.prototype.init=Ve}let R=null;function lt(){if(R!==null)return R;const u=re("settings");return R={forceWebGL:u.forceWebGL!==void 0?u.forceWebGL:!1,captureStackTrace:u.captureStackTrace!==void 0?u.captureStackTrace:!1,activeExtensions:u.activeExtensions!==void 0?u.activeExtensions:{}},R.forceWebGL&&at(!0),R.captureStackTrace&&(Xe.captureStackTrace=!0),R}function ye(){oe("settings",{forceWebGL:R.forceWebGL,captureStackTrace:R.captureStackTrace,activeExtensions:R.activeExtensions})}lt();class Gu extends ot{constructor(){super({name:"Settings"}),this.extensions={};const e=lt(),t=this.createGroup("Renderer");t.add(e,"forceWebGL").name("Force WebGL").onChange(n=>{at(n),ye(),location.reload()}),t.add(e,"captureStackTrace").name("Capture Stack Trace").onChange(n=>{Xe.captureStackTrace=n,ye(),location.reload()})}init(){const e=this.createGroup("Extensions");this._getExtensions().then(t=>{for(const n of t)n.active=!1,n.loaded=!1,n.tab=null,this.extensions[n.name]=n,n.ui=e.add({[n.name]:!1},n.name).onChange(async s=>{this.setActiveExtension(n.name,s),s?R.activeExtensions[n.name]={name:n.name,url:n.url}:delete R.activeExtensions[n.name],this._updateExtensionUI(n),ye()}),R.activeExtensions[n.name]!==void 0&&n.ui.setValue(!0)})}async setActiveExtension(e,t){const n=this.extensions[e],s=this.inspector;n&&(t?await this._loadExtension(s,n):await this._unloadExtension(s,n))}_updateExtensionUI(e){e.active&&R.activeExtensions[e.name]===void 0?(e.ui.checkbox.checked=!0,e.ui.domElement.style.setProperty("--accent-color","var(--color-green)")):e.ui.domElement.style.removeProperty("--accent-color")}async _unloadExtension(e,t){t.active!==!1&&(e.removeTab(t.tab),t.active=!1,t.loaded=!1,t.tab=null,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionremoved",name:t.name}))}async _loadExtension(e,t){if(t.active===!0)return;t.active=!0;const s=await import(new URL(t.url,new URL(Pe,import.meta.url)).href),r=Object.keys(s),o=s[r[0]],a=new o;e.addTab(a),t.loaded=!0,t.tab=a,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionadded",name:t.name,tab:a})}async _getExtensions(){const e=new URL(Pe,import.meta.url);return await fetch(e).then(n=>n.json())}}const $u=A(([u,e])=>{const t=M(0);Qe(()=>{const{width:a,height:l}=e.value;t.value=a/l});const n=u.sub(.5),r=ne(n.x.div(t),n.y).add(.5),o=ie(0,r.x).mul(ie(r.x,1)).mul(ie(0,r.y)).mul(ie(r.y,1));return K(r,o)});class Xu extends ee{constructor(e={}){super("Viewer",e);const t=new fe("Viewer","Name");t.setGridStyle("150px minmax(200px, 2fr)"),t.domElement.style.minWidth="400px";const n=document.createElement("div");n.className="list-scroll-wrapper",n.appendChild(t.domElement),this.content.appendChild(n);const s=new v("Nodes");t.add(s),this.itemLibrary=new Map,this.folderLibrary=new Map,this.canvasNodes=new Map,this.currentDataList=[],this.nodeList=t,this.nodes=s}getFolder(e){let t=this.folderLibrary.get(e);return t===void 0&&(t=new v(e),this.folderLibrary.set(e,t),this.nodeList.add(t)),t}addNodeItem(e){let t=this.itemLibrary.get(e.id);if(t===void 0){const n=e.name,s=e.canvasTarget.domElement;t=new v(s,n),t.itemRow.children[1].style["justify-content"]="flex-start",this.itemLibrary.set(e.id,t)}return t}getCanvasDataByNode(e,t){let n=this.canvasNodes.get(t);if(n===void 0){const s=document.createElement("canvas"),r=new ui(s);r.setPixelRatio(window.devicePixelRatio),r.setSize(140,140);const o=t.id,{path:a,name:l}=Nu(zu(t.getName()||"(unnamed)")),c=t.context({getUV:m=>{const g=$u(Re,m),f=g.xy,C=g.z;return f.mul(C)}});let d=N(K(c),1);d=it(d,Te,e.outputColorSpace),d=d.context({inspector:!0});const p=new P;p.outputNode=d;const h=new Me(p);h.name="Viewer - "+l,n={id:o,name:l,path:a,node:t,quad:h,canvasTarget:r,material:p},this.canvasNodes.set(t,n)}return n}update(e){const t=e.getRenderer(),n=e.getNodes();if(n.length>0){if(!t.backend.isWebGPUBackend){e.resolveConsoleOnce("warn","Inspector: Viewer is only available with WebGPU.");return}this.isVisible||this.show()}if(!this.isActive)return;const s=n.map(a=>this.getCanvasDataByNode(t,a)),r=[...this.currentDataList];for(const a of r)if(this.itemLibrary.has(a.id)&&s.indexOf(a)===-1){const l=this.itemLibrary.get(a.id),c=l.parent;c.remove(l),this.folderLibrary.has(c.data[0])&&c.children.length===0&&(c.parent.remove(c),this.folderLibrary.delete(c.data[0])),this.itemLibrary.delete(a.id)}const o={};for(const a of s){const l=this.addNodeItem(a),c=t.getCanvasTarget(),d=a.path;if(d){const h=this.getFolder(d);o[d]===void 0&&(o[d]=0),(h.parent===null||l.parent!==h||h.children.indexOf(l)!==o[d])&&h.add(l),o[d]++}else l.parent||this.nodes.add(l);this.currentDataList=s;const p=G.resetRendererState(t);t.toneMapping=Te,t.outputColorSpace=Nt,t.setCanvasTarget(a.canvasTarget),a.quad.render(t),t.setCanvasTarget(c),G.restoreRendererState(t,p)}}}const Ae=500,Oe=60;class qu extends ee{constructor(e={}){super("Timeline",e),this.isRecording=!1,this.frames=[],this.baseTriangles=0,this.currentFrame=null,this.isHierarchicalView=!0,this.callBlocks=new WeakMap,this.fallbackBlocks=[],this.originalBackend=null,this.originalMethods=new Map,this.renderer=null,this.graph=new Fe(Ae),this.graph.addLine("fps","var( --color-fps )"),this.graph.addLine("calls","var( --color-call )"),this.graph.addLine("triangles","var( --color-red )");const t=document.createElement("div");t.className="list-scroll-wrapper",this.scrollWrapper=t,this.content.appendChild(t),this.buildHeader(),this.buildUI(),window.addEventListener("resize",()=>{!this.isRecording&&this.frames.length>0&&this.renderSlider()})}buildHeader(){const e=document.createElement("div");e.className="console-header",this.recordButton=document.createElement("button"),this.recordButton.className="console-copy-button",this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.padding="0 10px",this.recordButton.style.lineHeight="24px",this.recordButton.style.display="flex",this.recordButton.style.alignItems="center",this.recordButton.addEventListener("click",()=>this.toggleRecording());const t=document.createElement("button");t.className="console-copy-button",t.title="Clear",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',t.style.padding="0 10px",t.style.lineHeight="24px",t.style.display="flex",t.style.alignItems="center",t.addEventListener("click",()=>this.clear()),this.viewModeButton=document.createElement("button"),this.viewModeButton.className="console-copy-button",this.viewModeButton.title="Toggle View Mode",this.viewModeButton.textContent="Mode: Hierarchy",this.viewModeButton.style.padding="0 10px",this.viewModeButton.style.lineHeight="24px",this.viewModeButton.addEventListener("click",()=>{this.isHierarchicalView=!this.isHierarchicalView,this.viewModeButton.textContent=this.isHierarchicalView?"Mode: Hierarchy":"Mode: Counts",this.selectedFrameIndex!==void 0&&this.selectedFrameIndex!==-1&&this.selectFrame(this.selectedFrameIndex)}),this.recordRefreshButton=document.createElement("button"),this.recordRefreshButton.className="console-copy-button",this.recordRefreshButton.title="Refresh & Record",this.recordRefreshButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>',this.recordRefreshButton.style.padding="0 10px",this.recordRefreshButton.style.lineHeight="24px",this.recordRefreshButton.style.display="flex",this.recordRefreshButton.style.alignItems="center",this.recordRefreshButton.addEventListener("click",()=>{const r=re("timeline");r.recording=!0,oe("timeline",r),window.location.reload()}),this.exportButton=document.createElement("button"),this.exportButton.className="console-copy-button",this.exportButton.title="Export",this.exportButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',this.exportButton.style.padding="0 10px",this.exportButton.style.lineHeight="24px",this.exportButton.style.display="flex",this.exportButton.style.alignItems="center",this.exportButton.addEventListener("click",()=>this.exportData());const n=document.createElement("div");n.className="console-buttons-group",n.appendChild(this.viewModeButton),n.appendChild(this.recordButton),n.appendChild(this.recordRefreshButton),n.appendChild(this.exportButton),n.appendChild(t),e.style.display="flex",e.style.justifyContent="space-between",e.style.padding="6px",e.style.borderBottom="1px solid var(--border-color)";const s=document.createElement("div");s.textContent="Backend Calls",s.style.display="flex",s.style.alignItems="center",s.style.color="var(--text-primary)",s.style.alignSelf="center",s.style.paddingLeft="5px",this.frameInfo=document.createElement("span"),this.frameInfo.style.display="inline-flex",this.frameInfo.style.alignItems="center",this.frameInfo.style.marginLeft="15px",this.frameInfo.style.fontFamily="monospace",this.frameInfo.style.color="var(--text-secondary)",this.frameInfo.style.fontSize="12px",s.appendChild(this.frameInfo),e.appendChild(s),e.appendChild(n),this.scrollWrapper.appendChild(e)}buildUI(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.height="calc(100% - 37px)",e.style.width="100%";const t=document.createElement("div");t.style.height="60px",t.style.minHeight="60px",t.style.borderBottom="1px solid var(--border-color)",t.style.backgroundColor="var(--background-color)",this.graphSlider=document.createElement("div"),this.graphSlider.style.height="100%",this.graphSlider.style.margin="0 10px",this.graphSlider.style.position="relative",this.graphSlider.style.cursor="crosshair",t.appendChild(this.graphSlider),this.graph.domElement.style.width="100%",this.graph.domElement.style.height="100%",this.graphSlider.appendChild(this.graph.domElement),this.hoverIndicator=document.createElement("div"),this.hoverIndicator.style.position="absolute",this.hoverIndicator.style.top="0",this.hoverIndicator.style.bottom="0",this.hoverIndicator.style.width="1px",this.hoverIndicator.style.backgroundColor="rgba(255, 255, 255, 0.3)",this.hoverIndicator.style.pointerEvents="none",this.hoverIndicator.style.display="none",this.hoverIndicator.style.zIndex="9",this.hoverIndicator.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.hoverIndicator),this.playhead=document.createElement("div"),this.playhead.style.position="absolute",this.playhead.style.top="0",this.playhead.style.bottom="0",this.playhead.style.width="2px",this.playhead.style.backgroundColor="var(--color-red)",this.playhead.style.boxShadow="0 0 4px rgba(255,0,0,0.5)",this.playhead.style.pointerEvents="none",this.playhead.style.display="none",this.playhead.style.zIndex="10",this.playhead.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.playhead);const n=document.createElement("div");n.style.position="absolute",n.style.top="0",n.style.left="50%",n.style.transform="translate(-50%, 0)",n.style.width="0",n.style.height="0",n.style.borderLeft="6px solid transparent",n.style.borderRight="6px solid transparent",n.style.borderTop="8px solid var(--color-red)",this.playhead.appendChild(n),this.graphSlider.tabIndex=0,this.graphSlider.style.outline="none";let s=!1;const r=a=>{if(this.frames.length===0)return;const l=this.graphSlider.getBoundingClientRect();let c=a.clientX-l.left;c=Math.max(0,Math.min(c,l.width)),this.fixedScreenX=c;const d=this.graph.lines.calls.points.length;if(d===0)return;const p=l.width/(this.graph.maxPoints-1),h=l.width-(d-1)*p;let m=Math.round((c-h)/p);m=Math.max(0,Math.min(m,d-1)),m>=d-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;let g=m;this.frames.length>d&&(g+=this.frames.length-d),this.playhead.style.display="block",this.selectFrame(g)};this.graphSlider.addEventListener("mousedown",a=>{s=!0,this.isManualScrubbing=!0,this.graphSlider.focus(),r(a)}),this.graphSlider.addEventListener("mouseenter",()=>{this.frames.length>0&&!this.isRecording&&(this.hoverIndicator.style.display="block")}),this.graphSlider.addEventListener("mouseleave",()=>{this.hoverIndicator.style.display="none"}),this.graphSlider.addEventListener("mousemove",a=>{if(this.frames.length===0||this.isRecording)return;const l=this.graphSlider.getBoundingClientRect();let c=a.clientX-l.left;c=Math.max(0,Math.min(c,l.width));const d=this.graph.lines.calls.points.length;if(d>0){const p=l.width/(this.graph.maxPoints-1),h=l.width-(d-1)*p;let m=Math.round((c-h)/p);m=Math.max(0,Math.min(m,d-1));let g=h+m*p;g=Math.max(1,Math.min(g,l.width-1)),this.hoverIndicator.style.left=g+"px"}else{const p=Math.max(1,Math.min(c,l.width-1));this.hoverIndicator.style.left=p+"px"}}),this.graphSlider.addEventListener("keydown",a=>{if(this.frames.length===0||this.isRecording)return;let l=this.selectedFrameIndex;if(a.key==="ArrowLeft"?(l=Math.max(0,this.selectedFrameIndex-1),a.preventDefault()):a.key==="ArrowRight"&&(l=Math.min(this.frames.length-1,this.selectedFrameIndex+1),a.preventDefault()),l!==this.selectedFrameIndex){this.selectFrame(l);const c=this.graph.lines.calls.points.length;if(c>0){let d=l;this.frames.length>c&&(d=l-(this.frames.length-c)),d>=c-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;const p=this.graphSlider.getBoundingClientRect(),h=p.width/(this.graph.maxPoints-1),m=p.width-(c-1)*h;this.fixedScreenX=m+d*h}}}),window.addEventListener("mousemove",a=>{if(s){r(a);const l=this.graphSlider.getBoundingClientRect();let c=a.clientX-l.left;c=Math.max(0,Math.min(c,l.width));const d=this.graph.lines.calls.points.length;if(d>0){const p=l.width/(this.graph.maxPoints-1),h=l.width-(d-1)*p;let m=Math.round((c-h)/p);m=Math.max(0,Math.min(m,d-1));let g=h+m*p;g=Math.max(1,Math.min(g,l.width-1)),this.hoverIndicator.style.left=g+"px"}else{const p=Math.max(1,Math.min(c,l.width-1));this.hoverIndicator.style.left=p+"px"}}}),window.addEventListener("mouseup",()=>{s=!1,this.isManualScrubbing=!1}),e.appendChild(t);const o=document.createElement("div");o.style.flex="1",o.style.display="flex",o.style.flexDirection="column",o.style.overflow="hidden",this.timelineTrack=document.createElement("div"),this.timelineTrack.style.flex="1",this.timelineTrack.style.overflowY="auto",this.timelineTrack.style.margin="10px",this.timelineTrack.style.backgroundColor="var(--background-color)",o.appendChild(this.timelineTrack),e.appendChild(o),this.scrollWrapper.appendChild(e)}setRenderer(e){this.renderer=e;const t=re("timeline");t.recording&&(t.recording=!1,oe("timeline",t),this.toggleRecording())}toggleRecording(){if(!this.renderer){console.warn("Timeline: No renderer defined.");return}this.isRecording=!this.isRecording,this.isRecording?(this.recordButton.title="Stop",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',this.recordButton.style.color="var(--color-red)",this.startRecording()):(this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.color="",this.stopRecording(),this.renderSlider())}startRecording(){this.frames=[],this.currentFrame=null,this.selectedFrameIndex=-1,this.fixedScreenX=0,this.isTrackingLatest=!0,this.isManualScrubbing=!1,this.clear(),this.frameInfo.textContent="Recording...";const e=this.renderer.backend,t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter(n=>n!=="constructor");for(const n of t){const s=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),n);if(s&&(s.get||s.set))continue;const r=e[n];typeof r=="function"&&typeof n=="string"&&(this.originalMethods.set(n,r),e[n]=(...o)=>{if(n.toLowerCase().includes("timestamp")||n.startsWith("get")||n.startsWith("set")||n.startsWith("has")||n.startsWith("_")||n.startsWith("needs"))return r.apply(e,o);const a=this.renderer.info.frame;if(!this.currentFrame||this.currentFrame.id!==a){if(this.currentFrame){this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0,isFinite(this.currentFrame.fps)||(this.currentFrame.fps=0);const d=this.currentFrame.triangles||0;if(d>this.baseTriangles){const h=this.baseTriangles;if(this.baseTriangles=d,h>0){const m=h/this.baseTriangles,g=this.graph.lines.triangles.points;for(let f=0;f<g.length;f++)g[f]*=m}}const p=this.baseTriangles>0?d/this.baseTriangles*Oe:0;this.graph.addPoint("calls",this.currentFrame.calls.length),this.graph.addPoint("fps",this.currentFrame.fps),this.graph.addPoint("triangles",p),this.graph.update()}if(this.currentFrame={id:a,calls:[],fps:0,triangles:0},this.frames.push(this.currentFrame),this.frames.length>Ae&&this.frames.shift(),!this.isManualScrubbing){if(this.isTrackingLatest){const d=this.frames.length>1?this.frames.length-2:0;this.selectFrame(d)}else if(this.selectedFrameIndex!==-1){const d=this.graph.lines.calls.points.length;if(d>0){const p=this.graphSlider.getBoundingClientRect(),h=p.width/(this.graph.maxPoints-1),m=p.width-(d-1)*h;let g=Math.round((this.fixedScreenX-m)/h);g=Math.max(0,Math.min(g,d-1));let f=g;this.frames.length>d&&(f+=this.frames.length-d),this.selectFrame(f)}}}}const l={method:n,target:o[0]},c=this.getCallDetail(n,o);return c&&(l.details=c,c.triangles!==void 0&&(this.currentFrame.triangles+=c.triangles)),this.currentFrame.calls.push(l),r.apply(e,o)})}}stopRecording(){if(this.originalMethods.size>0){const e=this.renderer.backend;for(const[t,n]of this.originalMethods.entries())e[t]=n;this.originalMethods.clear(),this.currentFrame&&(this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0)}}clear(){this.frames=[],this.timelineTrack.innerHTML="",this.playhead.style.display="none",this.frameInfo.textContent="",this.baseTriangles=0,this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit(),this.graph.update()}exportData(){if(this.frames.length===0)return;const e=JSON.stringify(this.frames,null,"	"),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download="threejs-timeline.json",s.click(),URL.revokeObjectURL(n)}getRenderTargetDetails(e){const t=e.textures,n=[],s=a=>{switch(a.type){case Gt:case jt:return"8";case Ht:case Ut:case de:case Wt:case Ot:return"16";case At:case Vt:case je:case Pt:case Dt:case zt:return"32";default:return"?"}},r=a=>{switch(a.format){case ii:return"a";case ti:case ei:return"r";case Kt:case Jt:return"rg";case Qt:case Zt:return"rgb";case Yt:return"depth";case qt:return"depth-stencil";case Xt:case $t:default:return"rgba"}};for(let a=0;a<t.length;a++){const l=t[a],c=s(l),d=r(l);let p=`[${a}]`;l.name&&!(l.isDepthTexture&&l.name==="depth")&&(p+=` ${l.name}`),p+=` ${d} ${c} bpc`,n.push(p)}const o={target:e.name||"RenderTarget",[`attachments(${t.length})`]:n.join(", ")};return e.depthTexture&&(o.depth=`${s(e.depthTexture)} bpc`),o}getCallDetail(e,t){switch(e){case"draw":{const n=t[0],s={object:n.object.name||n.object.type,material:n.material.name||n.material.type,geometry:n.geometry.name||n.geometry.type};if(n.getDrawParameters){const r=n.getDrawParameters();r&&(n.object.isMesh||n.object.isSprite)&&(s.triangles=r.vertexCount/3,n.object.count>1&&(s.instance=n.object.count,s["triangles per instance"]=s.triangles,s.triangles*=s.instance))}return s}case"beginRender":{const n=t[0],s={scene:this.renderer.inspector.currentRender.name||"unknown",camera:n.camera.name||n.camera.type};return n.renderTarget&&!n.renderTarget.isPostProcessingRenderTarget?Object.assign(s,this.getRenderTargetDetails(n.renderTarget)):s.target="CanvasTarget",s}case"beginCompute":return{compute:this.renderer.inspector.currentCompute.name||"unknown"};case"compute":{const n=t[1],s=t[2],r=t[4]||n.dispatchSize||n.count,o=n.name||n.type||"unknown";let a=0;s&&(a=s.length);let l;return r.isIndirectStorageBufferAttribute?l="indirect":Array.isArray(r)?l=r.join(", "):l=r,{node:o,bindings:a,dispatch:l}}case"updateBinding":return{group:t[0].name||"unknown"};case"clear":{const n=t[3],s={color:t[0],depth:t[1],stencil:t[2]};if(n.renderTarget&&!n.renderTarget.isPostProcessingRenderTarget){const r=this.getRenderTargetDetails(n.renderTarget);r.depth&&(r["depth texture"]=r.depth,delete r.depth),Object.assign(s,r)}else s.target="CanvasTarget";return s}case"updateViewport":{const n=t[0],{x:s,y:r,width:o,height:a}=n.viewportValue;return{x:s,y:r,width:o,height:a}}case"updateScissor":{const n=t[0],{x:s,y:r,width:o,height:a}=n.scissorValue;return{x:s,y:r,width:o,height:a}}case"createProgram":case"destroyProgram":{const n=t[0];return{stage:n.stage,name:n.name||"unknown"}}case"createRenderPipeline":{const n=t[0];return{object:n.object&&(n.object.name||n.object.type)||"unknown",material:n.material&&(n.material.name||n.material.type)||"unknown"}}case"createComputePipeline":case"destroyComputePipeline":return{name:t[0].name||"unknown"};case"createBindings":case"updateBindings":{const n=t[0],s={group:n.name||"unknown"};return n.bindings&&(s.count=n.bindings.length),s}case"createNodeBuilder":{const n=t[0],s={object:n.name||n.type||"unknown"};return n.material&&(s.material=n.material.name||n.material.type||"unknown"),s}case"createAttribute":case"createIndexAttribute":case"createStorageAttribute":case"destroyAttribute":case"destroyIndexAttribute":case"destroyStorageAttribute":{const n=t[0],s={};return n.name&&(s.name=n.name),n.count!==void 0&&(s.count=n.count),n.itemSize!==void 0&&(s.itemSize=n.itemSize),s}case"copyFramebufferToTexture":{const n=t[0],s=t[2];return{target:this.getTextureName(n),width:s.z,height:s.w}}case"copyTextureToTexture":{const n=t[0],s=t[1];return{source:this.getTextureName(n),destination:this.getTextureName(s)}}case"updateSampler":{const n=t[0];return{magFilter:this.getTextureFilterName(n.magFilter),minFilter:this.getTextureFilterName(n.minFilter),wrapS:this.getTextureWrapName(n.wrapS),wrapT:this.getTextureWrapName(n.wrapT),anisotropy:n.anisotropy}}case"updateTexture":case"generateMipmaps":case"createTexture":case"destroyTexture":{const n=t[0],r={texture:this.getTextureName(n)};return n.image&&(n.image.width!==void 0&&(r.width=n.image.width),n.image.height!==void 0&&(r.height=n.image.height)),r}}return null}getTextureName(e){if(e.name)return e.name;const t=["isFramebufferTexture","isDepthTexture","isDataArrayTexture","isData3DTexture","isDataTexture","isCompressedArrayTexture","isCompressedTexture","isCubeTexture","isVideoTexture","isCanvasTexture","isTexture"];for(const n of t)if(e[n])return n.replace("is","");return"Texture"}getTextureFilterName(e){return{1003:"Nearest",1004:"NearestMipmapNearest",1005:"NearestMipmapLinear",1006:"Linear",1007:"LinearMipmapNearest",1008:"LinearMipmapLinear"}[e]||e}getTextureWrapName(e){return{1e3:"Repeat",1001:"ClampToEdge",1002:"MirroredRepeat"}[e]||e}formatDetails(e){const t=[];for(const n in e)e[n]!==void 0&&t.push(`<span style="opacity: 0.5">${n}:</span> <span style="color: var(--text-secondary); opacity: 1">${e[n]}</span>`);return t.length===0?"":`<span style="font-size: 11px; margin-left: 8px; color: var(--text-secondary); opacity: 1;">{ ${t.join('<span style="opacity: 0.5">, </span>')} }</span>`}renderSlider(){if(this.frames.length===0){this.playhead.style.display="none",this.frameInfo.textContent="";return}this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit();let e=this.frames;e.length>this.graph.maxPoints&&(e=e.slice(-this.graph.maxPoints),this.frames=e);let t=0;for(let s=0;s<e.length;s++){const r=e[s].triangles||0;r>t&&(t=r)}for(let s=0;s<e.length;s++){const r=e[s].triangles||0,o=t>0?r/t*Oe:0;this.graph.addPoint("calls",e[s].calls.length),this.graph.addPoint("fps",e[s].fps||0),this.graph.addPoint("triangles",o)}this.graph.update(),this.playhead.style.display="block";let n=0;this.selectedFrameIndex!==-1&&this.selectedFrameIndex<this.frames.length?n=this.selectedFrameIndex:this.frames.length>0&&(n=this.frames.length-1),this.selectFrame(n)}selectFrame(e){if(e<0||e>=this.frames.length)return;this.selectedFrameIndex=e;const t=this.frames[e];this.renderTimelineTrack(t);const n=(a,l)=>`<span style="display:inline-flex;align-items:center;margin-left:12px;"><span style="width:6px;height:6px;border-radius:50%;background-color:${a};margin-right:6px;"></span>${l}</span>`,s=Math.max(this.baseTriangles,t.triangles||0);this.frameInfo.innerHTML="Frame: "+t.id+n("var(--color-fps)",(t.fps||0).toFixed(1)+" FPS")+n("var(--color-call)",t.calls.length+" calls")+n("var(--color-red)",(t.triangles||0)+" / "+s+" triangles");const r=this.graphSlider.getBoundingClientRect(),o=this.graph.lines.calls.points.length;if(o>0){const a=r.width/(this.graph.maxPoints-1);let l=e;this.frames.length>o&&(l=e-(this.frames.length-o));let d=r.width-(o-1)*a+l*a;d=Math.max(1,Math.min(d,r.width-1)),this.playhead.style.left=d+"px",this.playhead.style.display="block"}}getCallBlock(e,t,n=0){const s=e.target;let r;if(s&&typeof s=="object"){let o=this.callBlocks.get(s);o||(o=[],this.callBlocks.set(s,o)),r=o[n]}else r=this.fallbackBlocks[t];return r||(r=document.createElement("div"),r.style.padding="4px 8px",r.style.margin="2px 0",r.style.backgroundColor="rgba(255, 255, 255, 0.03)",r.style.fontFamily="monospace",r.style.fontSize="12px",r.style.color="var(--text-primary)",r.style.whiteSpace="nowrap",r.style.overflow="hidden",r.style.textOverflow="ellipsis",r.style.display="flex",r.style.alignItems="center",r.arrow=document.createElement("span"),r.arrow.style.fontSize="10px",r.arrow.style.marginRight="10px",r.arrow.style.cursor="pointer",r.arrow.style.width="26px",r.arrow.style.textAlign="center",r.appendChild(r.arrow),r.titleSpan=document.createElement("span"),r.appendChild(r.titleSpan),r.addEventListener("click",o=>{r._groupId&&(o.stopPropagation(),this.collapsedGroups.has(r._groupId)?this.collapsedGroups.delete(r._groupId):this.collapsedGroups.add(r._groupId),this.renderTimelineTrack(this.frames[this.selectedFrameIndex]))}),s&&typeof s=="object"?this.callBlocks.get(s)[n]=r:this.fallbackBlocks[t]=r),r.style.cursor="default",r._groupId=null,r.arrow.style.display="none",r}renderTimelineTrack(e){if(!e||e.calls.length===0){this.timelineTrack.innerHTML="";return}this.collapsedGroups||(this.collapsedGroups=new Set);let t=0;const n=this.timelineTrack.children;let s=0;const r=new WeakMap;if(this.isHierarchicalView){const o=[];let a=null;for(let p=0;p<e.calls.length;p++){const h=e.calls[p],m=h.method.startsWith("begin")||h.method.startsWith("finish"),g=h.details?this.formatDetails(h.details):"";a&&a.method===h.method&&a.formatedDetails===g&&!m?a.count++:(a={method:h.method,count:1,formatedDetails:g,target:h.target},o.push(a))}let l=0;const c=24,d=[{element:this.timelineTrack,isCollapsed:!1,id:"",beginCount:0}];for(let p=0;p<o.length;p++){const h=o[p];let m=0;h.target&&typeof h.target=="object"&&(m=r.get(h.target)||0,r.set(h.target,m+1));const g=this.getCallBlock(h,t++,m);g.style.marginLeft=l*c+"px",g.style.borderLeft="4px solid "+this.getColorForMethod(h.method);const f=d[d.length-1];if(f.isCollapsed||(n[s]!==g&&this.timelineTrack.insertBefore(g,n[s]),s++),h.method.startsWith("begin")){const C=f.beginCount++,w=f.id+"/"+h.method+"-"+C,y=this.collapsedGroups.has(w);g._groupId=w,g.style.cursor="pointer",g.arrow.style.display="inline-block",g.arrow.textContent=y?"[ + ]":"[ - ]",g.titleSpan.innerHTML=h.method+(h.formatedDetails?h.formatedDetails:"")+(h.count>1?` <span style="opacity: 0.5">( ${h.count} )</span>`:""),l++,d.push({element:g,isCollapsed:f.isCollapsed||y,id:w,beginCount:0})}else h.method.startsWith("finish")?(g.titleSpan.innerHTML=h.method+(h.formatedDetails?h.formatedDetails:"")+(h.count>1?` <span style="opacity: 0.5">( ${h.count} )</span>`:""),l=Math.max(0,l-1),d.pop()):g.titleSpan.innerHTML=h.method+(h.formatedDetails?h.formatedDetails:"")+(h.count>1?` <span style="opacity: 0.5">( ${h.count} )</span>`:"")}}else{const o={};for(let l=0;l<e.calls.length;l++){const c=e.calls[l].method;c.startsWith("finish")||(o[c]=(o[c]||0)+1)}const a=Object.keys(o).map(l=>({method:l,count:o[l]}));a.sort((l,c)=>c.count-l.count);for(let l=0;l<a.length;l++){const c=a[l],d=this.getCallBlock(c,t++);d.style.marginLeft="0px",d.style.borderLeft="4px solid "+this.getColorForMethod(c.method),d.titleSpan.innerHTML=c.method+(c.count>1?` <span style="opacity: 0.5">( ${c.count} )</span>`:""),n[s]!==d&&this.timelineTrack.insertBefore(d,n[s]),s++}}for(;this.timelineTrack.children.length>s;)this.timelineTrack.removeChild(this.timelineTrack.lastChild)}getColorForMethod(e){return e.startsWith("begin")?"var(--color-green)":e.startsWith("finish")||e.startsWith("destroy")?"var(--color-red)":e.startsWith("draw")||e.startsWith("compute")||e.startsWith("create")||e.startsWith("generate")?"var(--color-yellow)":"var(--text-secondary)"}}class Yu extends Iu{constructor(){super();const e=new Fu(this);e.addEventListener("resize",c=>this.dispatchEvent(c));const t=new ot({builtin:!0,icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>'});t.hide(),e.addTab(t);const n=new Xu;n.hide(),e.addTab(n);const s=new Du;e.addTab(s);const r=new Pu;e.addTab(r);const o=new qu;e.addTab(o);const a=new Vu;e.addTab(a);const l=new Gu;e.addTab(l),e.loadLayout(),e.activeTabId||e.setActiveTab(s.id),this.statsData=new Map,this.profiler=e,this.performance=s,this.memory=r,this.console=a,this.parameters=t,this.viewer=n,this.timeline=o,this.settings=l,this.once={},this.extensionsData=new WeakMap,this.displayCycle={text:{needsUpdate:!1,duration:.25,time:0},graph:{needsUpdate:!1,duration:.02,time:0}}}get domElement(){return this.profiler.domElement}onExtension(e,t){const n=s=>{s.name===e&&(t(s.tab),this.settings.removeEventListener("extensionadded",n))};return this.settings.extensions[e]&&this.settings.extensions[e].loaded?t(this.settings.extensions[e]):this.settings.addEventListener("extensionadded",n),this}hide(){this.profiler.hide()}show(){this.profiler.show()}getSize(){return this.profiler.getSize()}setActiveTab(e){return this.profiler.setActiveTab(e.id),this}addTab(e){return this.profiler.addTab(e),this}removeTab(e){return this.profiler.removeTab(e),this}setActiveExtension(e,t){return this.settings.setActiveExtension(e,t),this}resolveConsoleOnce(e,t){const n=e+t;this.once[n]!==!0&&(this.resolveConsole(e,t),this.once[n]=!0)}resolveConsole(e,t,n=null){switch(e){case"log":this.console.addMessage("info",t),console.log(t);break;case"warn":this.console.addMessage("warn",t),n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t);break;case"error":this.console.addMessage("error",t),n&&n.isStackTrace?console.error(n.getError(t)):console.error(t);break}}init(){const e=this.getRenderer();let t=`THREE.WebGPURenderer: ${ni} [ "`;e.backend.isWebGPUBackend?t+="WebGPU":e.backend.isWebGLBackend&&(t+="WebGL2"),t+='" ]',this.console.addMessage("info",t),e.inspector.domElement.parentElement===null&&e.domElement.parentElement!==null&&e.domElement.parentElement.appendChild(e.inspector.domElement)}setRenderer(e){return super.setRenderer(e),e!==null&&(si(this.resolveConsole.bind(this)),this.isAvailable&&(e.init().then(()=>{e.backend.trackTimestamp=!0,e.hasFeature("timestamp-query")!==!0&&this.console.addMessage("error","THREE.Inspector: GPU Timestamp Queries not available.")}),this.timeline.setRenderer(e))),this}createParameters(e){return this.parameters.isVisible===!1&&this.parameters.show(),this.parameters.createGroup(e)}getStatsData(e){let t=this.statsData.get(e);return t===void 0&&(t={},this.statsData.set(e,t)),t}resolveStats(e){const t=this.getStatsData(e.cid);t.initialized!==!0&&(t.cpu=e.cpu,t.gpu=e.gpu,t.stats=[],t.initialized=!0),t.stats.length>this.maxFrames&&t.stats.shift(),t.stats.push(e),t.cpu=this.getAverageDeltaTime(t,"cpu"),t.gpu=this.getAverageDeltaTime(t,"gpu"),t.total=t.cpu+t.gpu;for(const n of e.children){this.resolveStats(n);const s=this.getStatsData(n.cid);t.cpu+=s.cpu,t.gpu+=s.gpu,t.total+=s.total}}getNodes(){return this.currentNodes}getAverageDeltaTime(e,t,n=this.fps){const s=e.stats;let r=0,o=0;for(let a=s.length-1;a>=0&&o<n;a--){const c=s[a][t];c>0&&(r+=c,o++)}return o>0?r/o:0}updateTabs(){const e=Object.values(this.profiler.tabs);for(const t of e){let n=this.extensionsData.get(t);n===void 0&&(t.init(this),n={},this.extensionsData.set(t,n)),t.update(this)}}resolveFrame(e){const t=this.getFrameById(e.frameId+1);if(t){e.cpu=0,e.gpu=0,e.total=0;for(const n of e.children){this.resolveStats(n);const s=this.getStatsData(n.cid);e.cpu+=s.cpu,e.gpu+=s.gpu,e.total+=s.total}e.deltaTime=t.startTime-e.startTime,e.miscellaneous=e.deltaTime-e.total,e.miscellaneous<0&&(e.miscellaneous=0),this.updateCycle(this.displayCycle.text),this.updateCycle(this.displayCycle.graph),this.displayCycle.text.needsUpdate&&(x("fps-counter",this.fps.toFixed()),this.performance.updateText(this,e),this.memory.updateText(this)),this.displayCycle.graph.needsUpdate&&(this.performance.updateGraph(this,e),this.memory.updateGraph(this)),this.displayCycle.text.needsUpdate=!1,this.displayCycle.graph.needsUpdate=!1}}updateCycle(e){e.time+=this.nodeFrame.deltaTime,e.time>=e.duration&&(e.needsUpdate=!0,e.time=0)}static getItem(e){return console.warn("Inspector.getItem is deprecated. Use getItem directly instead."),re(e)}static setItem(e,t){console.warn("Inspector.setItem is deprecated. Use setItem directly instead."),oe(e,t)}}function re(u){return JSON.parse(localStorage.getItem("threejs-inspector")||"{}")[u]||{}}function oe(u,e){const t=JSON.parse(localStorage.getItem("threejs-inspector")||"{}");e===null?delete t[u]:t[u]=e,localStorage.setItem("threejs-inspector",JSON.stringify(t))}const k=new Me,Zu=new O,We=new O(1,0),Ue=new O(0,1);let Y;class Qu extends Ge{static get type(){return"OutlineNode"}constructor(e,t,n={}){super("vec4");const{selectedObjects:s=[],edgeThickness:r=j(1),edgeGlow:o=j(0),downSampleRatio:a=2}=n;this.scene=e,this.camera=t,this.selectedObjects=s,this.edgeThicknessNode=me(r),this.edgeGlowNode=me(o),this.downSampleRatio=a,this.updateBeforeType=$e.FRAME,this._renderTargetDepthBuffer=new D,this._renderTargetDepthBuffer.depthTexture=new ri,this._renderTargetDepthBuffer.depthTexture.type=je,this._renderTargetMaskBuffer=new D,this._renderTargetMaskDownSampleBuffer=new D(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer1=new D(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer2=new D(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer1=new D(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer2=new D(1,1,{depthBuffer:!1}),this._renderTargetComposite=new D(1,1,{depthBuffer:!1}),this._cameraNear=_e("near","float",t),this._cameraFar=_e("far","float",t),this._blurDirection=M(new O),this._depthTextureUniform=E(this._renderTargetDepthBuffer.depthTexture),this._maskTextureUniform=E(this._renderTargetMaskBuffer.texture),this._maskTextureDownsSampleUniform=E(this._renderTargetMaskDownSampleBuffer.texture),this._edge1TextureUniform=E(this._renderTargetEdgeBuffer1.texture),this._edge2TextureUniform=E(this._renderTargetEdgeBuffer2.texture),this._blurColorTextureUniform=E(this._renderTargetEdgeBuffer1.texture),this._visibleEdgeColor=K(1,0,0),this._hiddenEdgeColor=K(0,1,0),this._depthMaterial=new P,this._depthMaterial.colorNode=Ce(0,0,0),this._depthMaterial.name="OutlineNode.depth",this._depthSpriteMaterial=new De,this._depthSpriteMaterial.colorNode=Ce(0,0,0),this._depthSpriteMaterial.name="OutlineNode.depthSprite",this._prepareMaskMaterial=new P,this._prepareMaskMaterial.name="OutlineNode.prepareMask",this._prepareMaskSpriteMaterial=new De,this._prepareMaskSpriteMaterial.name="OutlineNode.prepareMaskSprite",this._materialCopy=new P,this._materialCopy.name="OutlineNode.copy",this._edgeDetectionMaterial=new P,this._edgeDetectionMaterial.name="OutlineNode.edgeDetection",this._separableBlurMaterial=new P,this._separableBlurMaterial.name="OutlineNode.separableBlur",this._separableBlurMaterial2=new P,this._separableBlurMaterial2.name="OutlineNode.separableBlur2",this._compositeMaterial=new P,this._compositeMaterial.name="OutlineNode.composite",this._selectionCache=new Set,this._lastSelectionCount=0,this._textureNode=Ie(this,this._renderTargetComposite.texture)}get visibleEdge(){return this.r}get hiddenEdge(){return this.g}getTextureNode(){return this._textureNode}setSize(e,t){this._renderTargetDepthBuffer.setSize(e,t),this._renderTargetMaskBuffer.setSize(e,t),this._renderTargetComposite.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this._renderTargetMaskDownSampleBuffer.setSize(n,s),this._renderTargetEdgeBuffer1.setSize(n,s),this._renderTargetBlurBuffer1.setSize(n,s),n=Math.round(n/2),s=Math.round(s/2),this._renderTargetEdgeBuffer2.setSize(n,s),this._renderTargetBlurBuffer2.setSize(n,s)}updateBefore(e){const{renderer:t}=e,{camera:n,scene:s}=this;if(this._updateSelectionCache(),this._selectionCache.size===0){this._lastSelectionCount>0&&(Y=G.resetRendererState(t,Y),t.setRenderTarget(this._renderTargetComposite),t.setClearColor(0,0),t.clear(),G.restoreRendererState(t,Y),this._lastSelectionCount=0);return}this._lastSelectionCount=this._selectionCache.size,Y=G.resetRendererAndSceneState(t,s,Y);const r=t.getDrawingBufferSize(Zu);this.setSize(r.width,r.height),t.setClearColor(16777215,1);const o=s.name;t.setRenderTarget(this._renderTargetDepthBuffer),t.setRenderObjectFunction((a,l,c,d,p,h,m,g)=>{if(this._selectionCache.has(a)===!1){const f=a.isSprite?this._depthSpriteMaterial:this._depthMaterial;t.renderObject(a,l,c,d,f,h,m,g)}}),s.name="Outline [ Non-Selected Objects Pass ]",t.render(s,n),t.setRenderTarget(this._renderTargetMaskBuffer),t.setRenderObjectFunction((a,l,c,d,p,h,m,g)=>{if(this._selectionCache.has(a)===!0){const f=a.isSprite?this._prepareMaskSpriteMaterial:this._prepareMaskMaterial;t.renderObject(a,l,c,d,f,h,m,g)}}),s.name="Outline [ Selected Objects Pass ]",t.render(s,n),t.setRenderObjectFunction(Y.renderObjectFunction),this._selectionCache.clear(),s.name=o,k.material=this._materialCopy,k.name="Outline [ Downsample ]",t.setRenderTarget(this._renderTargetMaskDownSampleBuffer),k.render(t),k.material=this._edgeDetectionMaterial,k.name="Outline [ Edge Detection ]",t.setRenderTarget(this._renderTargetEdgeBuffer1),k.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(We),k.material=this._separableBlurMaterial,k.name="Outline [ Blur Half Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer1),k.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer1.texture,this._blurDirection.value.copy(Ue),t.setRenderTarget(this._renderTargetEdgeBuffer1),k.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(We),k.material=this._separableBlurMaterial2,k.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer2),k.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer2.texture,this._blurDirection.value.copy(Ue),t.setRenderTarget(this._renderTargetEdgeBuffer2),k.render(t),k.material=this._compositeMaterial,k.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetComposite),k.render(t),G.restoreRendererAndSceneState(t,s,Y)}setup(){const e=()=>{const a=this._depthTextureUniform.sample(Re);let l;this.camera.isPerspectiveCamera?l=et(a,this._cameraNear,this._cameraFar):l=Je(a,this._cameraNear,this._cameraFar);const c=tt.z.lessThanEqual(l).select(1,0);return K(0,c,1)};this._prepareMaskMaterial.colorNode=e(),this._prepareMaskMaterial.needsUpdate=!0,this._prepareMaskSpriteMaterial.colorNode=e(),this._prepareMaskSpriteMaterial.needsUpdate=!0,this._materialCopy.fragmentNode=this._maskTextureUniform,this._materialCopy.needsUpdate=!0;const t=A(()=>{const a=Be(this._maskTextureDownsSampleUniform),l=ne(1).div(a).toVar(),c=N(1,0,0,1).mul(N(l,l)),d=ge(),p=this._maskTextureDownsSampleUniform.sample(d.add(c.xy)).toVar(),h=this._maskTextureDownsSampleUniform.sample(d.sub(c.xy)).toVar(),m=this._maskTextureDownsSampleUniform.sample(d.add(c.yw)).toVar(),g=this._maskTextureDownsSampleUniform.sample(d.sub(c.yw)).toVar(),f=Se(p.r.sub(h.r),.5),C=Se(m.r.sub(g.r),.5),w=ne(f,C).length(),y=he(p.g,h.g),_=he(m.g,g.g),V=he(y,_).oneMinus().greaterThan(.001).select(this._visibleEdgeColor,this._hiddenEdgeColor);return N(V,1).mul(w)});this._edgeDetectionMaterial.fragmentNode=t(),this._edgeDetectionMaterial.needsUpdate=!0;const n=4,s=A(([a,l])=>j(.39894).mul(Ye(j(-.5).mul(a).mul(a).div(l.mul(l))).div(l))),r=A(([a])=>{const l=Be(this._maskTextureDownsSampleUniform),c=ne(1).div(l).toVar(),d=ge(),p=a.div(2).toVar(),h=s(0,p).toVar(),m=this._blurColorTextureUniform.sample(d).mul(h).toVar(),g=this._blurDirection.mul(c).mul(a).div(n).toVar(),f=g.toVar();return Le({start:se(1),end:se(n),type:"int",condition:"<="},({i:C})=>{const w=a.mul(j(C)).div(n),y=s(w,p),_=this._blurColorTextureUniform.sample(d.add(f)),F=this._blurColorTextureUniform.sample(d.sub(f));m.addAssign(_.add(F).mul(y)),h.addAssign(y.mul(2)),f.addAssign(g)}),m.div(h)});this._separableBlurMaterial.fragmentNode=r(this.edgeThicknessNode),this._separableBlurMaterial.needsUpdate=!0,this._separableBlurMaterial2.fragmentNode=r(n),this._separableBlurMaterial2.needsUpdate=!0;const o=A(()=>{const a=this._edge1TextureUniform,l=this._edge2TextureUniform,c=this._maskTextureUniform,d=a.add(l.mul(this.edgeGlowNode));return c.r.mul(d)});return this._compositeMaterial.fragmentNode=o(),this._compositeMaterial.needsUpdate=!0,this._textureNode}dispose(){this.selectedObjects.length=0,this._renderTargetDepthBuffer.dispose(),this._renderTargetMaskBuffer.dispose(),this._renderTargetMaskDownSampleBuffer.dispose(),this._renderTargetEdgeBuffer1.dispose(),this._renderTargetEdgeBuffer2.dispose(),this._renderTargetBlurBuffer1.dispose(),this._renderTargetBlurBuffer2.dispose(),this._renderTargetComposite.dispose(),this._depthMaterial.dispose(),this._depthSpriteMaterial.dispose(),this._prepareMaskMaterial.dispose(),this._prepareMaskSpriteMaterial.dispose(),this._materialCopy.dispose(),this._edgeDetectionMaterial.dispose(),this._separableBlurMaterial.dispose(),this._separableBlurMaterial2.dispose(),this._compositeMaterial.dispose()}_updateSelectionCache(){for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(n=>{(n.isMesh||n.isSprite)&&this._selectionCache.add(n)})}}const Ju=(u,e,t)=>new Qu(u,e,t);class Ku{constructor(){T(this,"renderer");T(this,"scene");T(this,"pipeline");T(this,"scenePass");T(this,"bloomPass");T(this,"outlinePass");T(this,"sceneOutput");T(this,"bloomOutput");T(this,"_render",()=>{this.renderer.render(this.scene,this.camera)});this.renderer=new ue({antialias:!0}),this.renderer.setClearColor("#000"),this.renderer.outputColorSpace=oi,this.renderer.toneMapping=Te,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=ai,this.renderer.inspector=new Yu,this.renderer.setPixelRatio(window.devicePixelRatio),this.scene=new li,this.scene.background=new be("#000"),this.pipeline=new mi(this.renderer),this.scenePass=Ke(this.scene,ci),this.outlinePass=Ju(this.scene,this.camera,{edgeGlow:M(0),edgeThickness:M(1)});const{visibleEdge:e,hiddenEdge:t}=this.outlinePass,n=M(new be("#ffff00")),s=M(new be("#a600ff")),r=M(3),o=e.mul(n).add(t.mul(s)).mul(r);this.sceneOutput=o.add(this.scenePass),this.bloomPass=Eu(this.sceneOutput),this.bloomOutput=this.sceneOutput.add(this.bloomPass),this.pipeline.outputNode=this.sceneOutput}get camera(){return this.scenePass.camera}set camera(e){this.scenePass.camera=e}mount(e){e.appendChild(this.renderer.domElement)}setOutlineSelections(e){this.outlinePass.selectedObjects=[...e]}render(){this.pipeline.render()}resize(e,t){this.renderer.setSize(e,t)}dispose(){this.outlinePass.selectedObjects=[],this.renderer.domElement.remove(),this.pipeline.dispose(),this.renderer.dispose()}toImage(){return this.render(),this.renderer.domElement.toDataURL("image/png")}}class dm extends He{constructor(){super();T(this,"container");T(this,"render");T(this,"timer");T(this,"modules");T(this,"update",()=>{this.timer.update(),this.emit(U.Update,this),this.emit(U.RenderBefore,this),this.render.render(),this.emit(U.RenderAfter,this)});T(this,"resize",()=>{const{offsetWidth:t,offsetHeight:n}=this.container;this.render.resize(t,n),this.emit(U.Resize,this)});this.container=document.createElement("div"),this.container.className="core-3d",this.container.style.position="relative",this.container.style.height="100%",this.container.style.pointerEvents="auto",this.container.tabIndex=0,this.render=new Ku,this.timer=new di,this.modules=new Map,I.from(this.render.scene).attach(this)}mount(t){t.appendChild(this.container),this.render.mount(this.container),this.timer.connect(document),this.emit(U.Mount,this)}unmount(){this.timer.disconnect(),this.modules.forEach(t=>t.unmount(this)),this.modules.clear(),I.destroy(this.render.scene),this.render.dispose(),this.container.remove(),this.emit(U.Unmount,this),this.removeAllListeners()}start(){this.timer.reset(),this.render.renderer.setAnimationLoop(this.update),this.emit(U.Start,this)}stop(){this.render.renderer.setAnimationLoop(null),this.emit(U.Stop,this)}addModule(t,n){this.modules.set(t,n),n.mount(this)}getModule(t){return this.modules.get(t)}removeModule(t){const n=this.modules.get(t);n==null||n.unmount(this),this.modules.delete(t)}}export{dm as C,sm as D,I as E,A as F,Le as L,cm as T,rm as a,nm as b,Hs as c,ge as d,N as e,lm as f,am as g,j as h,md as i,Wp as j,Xs as k,ar as l,bd as m,me as n,Ie as p,om as r,ph as s,M as u,ne as v};
