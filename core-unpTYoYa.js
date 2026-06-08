const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["longriver1012/orbit-controls-component-BArQ3Rnm.js","longriver1012/index-P52gpN9p.js","longriver1012/index-DycH0vvF.css","longriver1012/three.webgpu-B5dtjABs.js"])))=>i.map(i=>d[i]);
var kt=Object.defineProperty;var Et=(d,e,t)=>e in d?kt(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var v=(d,e,t)=>Et(d,typeof e!="symbol"?e+"":e,t);import{df as Mt,aY as B,bx as ne,dh as se,bu as Ge,dj as Ye,bh as S,eZ as Bt,di as Lt,aW as It,g3 as Pt,A as X,B as Rt,_ as Dt,b2 as Nt,b4 as Ft,b1 as At,b5 as zt,b3 as Ot,b6 as Vt,b7 as Wt,eo as jt,b8 as Ut,aZ as Ht,bs as Gt,g4 as I,aS as Yt,aH as $t,aR as Xt,aV as Zt,aU as qt,aN as Kt,aF as Qt,aG as Jt,aK as st,fX as $e,g2 as W,ah as fe,g5 as ue,g6 as ei,g7 as Ae,g8 as Le,aB as ti,am as ii,al as si,ak as ni,ag as nt,ae as oi,af as ri,aj as ai,ai as li,ac as ci,ad as hi,aa as di,ab as pi,g9 as ui,ds as mi,fu as gi,ga as fi,gb as bi,gc as xi,ec as yi,ea as wi,eb as vi,e9 as _i,gd as Ti,dB as Ci,ge as Si,fk as ki,aC as Ei,gf as Mi,bM as Bi,aE as Ce,fW as Li,fn as Ii,bw as Y}from"./index-P52gpN9p.js";import{c as s,T as ot,N as rt,R as q,Q as ze,a as j,I as Pi,d as at,W as ye,e as Ri,C as Di,S as Xe,f as Ni}from"./three.webgpu-B5dtjABs.js";const Ze={type:"change"},Oe={type:"start"},lt={type:"end"},me=new Bt,qe=new Lt,Fi=Math.cos(70*It.DEG2RAD),k=new B,P=2*Math.PI,w={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Se=1e-6;class Om extends Mt{constructor(e,t=null){super(e,t),this.state=w.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ne.ROTATE,MIDDLE:ne.DOLLY,RIGHT:ne.PAN},this.touches={ONE:se.ROTATE,TWO:se.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ge,this._lastTargetPosition=new B,this._quat=new Ge().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ye,this._sphericalDelta=new Ye,this._scale=1,this._panOffset=new B,this._rotateStart=new S,this._rotateEnd=new S,this._rotateDelta=new S,this._panStart=new S,this._panEnd=new S,this._panDelta=new S,this._dollyStart=new S,this._dollyEnd=new S,this._dollyDelta=new S,this._dollyDirection=new B,this._mouse=new S,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zi.bind(this),this._onPointerDown=Ai.bind(this),this._onPointerUp=Oi.bind(this),this._onContextMenu=Yi.bind(this),this._onMouseWheel=ji.bind(this),this._onKeyDown=Ui.bind(this),this._onTouchStart=Hi.bind(this),this._onTouchMove=Gi.bind(this),this._onMouseDown=Vi.bind(this),this._onMouseMove=Wi.bind(this),this._interceptControlDown=$i.bind(this),this._interceptControlUp=Xi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ze),this.update(),this.state=w.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===w.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=P:i>Math.PI&&(i-=P),n<-Math.PI?n+=P:n>Math.PI&&(n-=P),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=k.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(me.origin.copy(this.object.position),me.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(me.direction))<Fi?this.object.lookAt(this.target):(qe.setFromNormalAndCoplanarPoint(this.object.up,this.target),me.intersectPlane(qe,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Se||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Se||this._lastTargetPosition.distanceToSquared(this.target)>Se?(this.dispatchEvent(Ze),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?P/60*this.autoRotateSpeed*e:P/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;k.copy(n).sub(this.target);let o=k.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,o=t-i.top,r=i.width,a=i.height;this._mouse.x=n/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(P*this._rotateDelta.x/t.clientHeight),this._rotateUp(P*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(P*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-P*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(P*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-P*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,o=Math.sqrt(i*i+n*n);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(n,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(P*this._rotateDelta.x/t.clientHeight),this._rotateUp(P*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,o=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new S,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ai(d){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(d.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(d)&&(this._addPointer(d),d.pointerType==="touch"?this._onTouchStart(d):this._onMouseDown(d),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zi(d){this.enabled!==!1&&(d.pointerType==="touch"?this._onTouchMove(d):this._onMouseMove(d))}function Oi(d){switch(this._removePointer(d),this._pointers.length){case 0:this.domElement.releasePointerCapture(d.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lt),this.state=w.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vi(d){let e;switch(d.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(d),this.state=w.DOLLY;break;case ne.ROTATE:if(d.ctrlKey||d.metaKey||d.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(d),this.state=w.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(d),this.state=w.ROTATE}break;case ne.PAN:if(d.ctrlKey||d.metaKey||d.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(d),this.state=w.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(d),this.state=w.PAN}break;default:this.state=w.NONE}this.state!==w.NONE&&this.dispatchEvent(Oe)}function Wi(d){switch(this.state){case w.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(d);break;case w.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(d);break;case w.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(d);break}}function ji(d){this.enabled===!1||this.enableZoom===!1||this.state!==w.NONE||(d.preventDefault(),this.dispatchEvent(Oe),this._handleMouseWheel(this._customWheelEvent(d)),this.dispatchEvent(lt))}function Ui(d){this.enabled!==!1&&this._handleKeyDown(d)}function Hi(d){switch(this._trackPointer(d),this._pointers.length){case 1:switch(this.touches.ONE){case se.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(d),this.state=w.TOUCH_ROTATE;break;case se.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(d),this.state=w.TOUCH_PAN;break;default:this.state=w.NONE}break;case 2:switch(this.touches.TWO){case se.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(d),this.state=w.TOUCH_DOLLY_PAN;break;case se.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(d),this.state=w.TOUCH_DOLLY_ROTATE;break;default:this.state=w.NONE}break;default:this.state=w.NONE}this.state!==w.NONE&&this.dispatchEvent(Oe)}function Gi(d){switch(this._trackPointer(d),this.state){case w.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(d),this.update();break;case w.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(d),this.update();break;case w.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(d),this.update();break;case w.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(d),this.update();break;default:this.state=w.NONE}}function Yi(d){this.enabled!==!1&&d.preventDefault()}function $i(d){d.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xi(d){d.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zi{constructor(e,t){v(this,"uuid");v(this,"script");v(this,"name");this.script=e,this.name="script",this.uuid=t}dispose(){this.script=""}}const _e=class _e extends Pt{constructor(){super(...arguments);v(this,"type",X.Script)}static isFileType(t){return this.compatibles.some(i=>i.type===t)}static async loadAsync(t){const i=await Rt(t);if(!i)throw new Error(`File with uuid ${t} not found`);if(!this.isFileType(i.type))throw new Error(`Unknown type ${i==null?void 0:i.type}`);let n;switch(i.type){case"js":{const o=await fetch(i.file).then(r=>r.text());n=new Zi(o,t);break}default:throw new Error(`Unkown type ${i.type}`)}return n.name=i.name,new _e(n,t)}dispose(){var t,i;(i=(t=this.source).dispose)==null||i.call(t)}};v(_e,"compatibles",Object.freeze([{type:"js",exts:"js"}]));let Ie=_e;class Vm{constructor(e){v(this,"core");this.core=e}get render(){return this.core.render}get bloomEnable(){return this.core.render.pipeline.outputNode===this.core.render.bloomOutput}set bloomEnable(e){const t=this.core.render;t.pipeline.outputNode=e?t.bloomOutput:t.sceneOutput,t.pipeline.needsUpdate=!0}get bloomStrength(){return this.core.render.bloomPass.strength.value}set bloomStrength(e){this.core.render.bloomPass.strength.value=e}get bloomRadius(){return this.core.render.bloomPass.radius.value}set bloomRadius(e){this.core.render.bloomPass.radius.value=e}get bloomThreshold(){return this.core.render.bloomPass.threshold.value}set bloomThreshold(e){this.core.render.bloomPass.threshold.value=e}}const qi=[{name:"轨道控制器",uuid:"orbit-controls-component",loader:()=>Dt(()=>import("./orbit-controls-component-BArQ3Rnm.js"),__vite__mapDeps([0,1,2,3])),fields:[{name:"enabled",label:"启用",type:"boolean",value:!0},{name:"target",label:"目标位置",type:"THREE.Vector3",value:{className:"Vector3",args:[0,0,0]}},{name:"enableDamping",label:"启用阻尼",type:"boolean",value:!1},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.05,min:0,max:1,step:.01},{name:"enableZoom",label:"启用缩放",type:"boolean",value:!0},{name:"zoomSpeed",label:"缩放速度",type:"number",value:1,min:0,step:.1},{name:"enableRotate",label:"启用旋转",type:"boolean",value:!0},{name:"rotateSpeed",label:"旋转速度",type:"number",value:1,min:0,step:.1},{name:"enablePan",label:"启用平移",type:"boolean",value:!0},{name:"panSpeed",label:"平移速度",type:"number",value:1,min:0,step:.1},{name:"screenSpacePanning",label:"屏幕空间平移",type:"boolean",value:!0},{name:"minDistance",label:"最小距离",type:"number",value:0,min:0,step:.1},{name:"maxDistance",label:"最大距离",type:"number",value:1/0,min:0,step:.1},{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:Math.PI,step:.01},{name:"maxPolarAngle",label:"最大极角",type:"number",value:Math.PI,min:0,max:Math.PI,step:.01},{name:"minAzimuthAngle",label:"最小方位角",type:"number",value:-1/0,step:.01},{name:"maxAzimuthAngle",label:"最大方位角",type:"number",value:1/0,step:.01},{name:"autoRotate",label:"自动旋转",type:"boolean",value:!1},{name:"autoRotateSpeed",label:"自动旋转速度",type:"number",value:2,step:.1}]}],Wm=d=>qi.some(e=>e.uuid===d),ke=Object.freeze({[I.Object3D]:()=>new Gt,[I.Group]:()=>new Ht,[I.Mesh]:()=>new Ut,[I.Sprite]:()=>new jt,[I.PerspectiveCamera]:()=>new Wt,[I.OrthographicCamera]:()=>new Vt,[I.PointLight]:()=>new Ot,[I.AmbientLight]:()=>new zt,[I.HemisphereLight]:()=>new At,[I.DirectionalLight]:()=>new Ft,[I.SpotLight]:()=>new Nt,[I.Scene]:()=>null,[I.Bone]:()=>null,[I.SkinnedMesh]:()=>null}),Ki=d=>{var t;const e=(t=ke[d])==null?void 0:t.call(ke);if(!e)throw new Error(`Unsupported object type: ${d}`);return e};function ge(d,e){let t=d;const i=e.split(".");if(i.length>1)for(let n=1;n<i.length;n++){const o=Number(i[n]);if(!t.children){console.error("parseItemFromIndexDotPath: `indicies.length > 1` but no `item.children` to define result item",{item:t,root:d,path:e});continue}const r=t.children[o];if(!r){console.error("parseItemFromIndexDotPath: `indicies.length > 1` but `item.children[index]` is undefined",{item:t,root:d,path:e});continue}t=r}return t}class jm{async restoreAssets(e,t){const i=e.map(n=>this.restoreAsset(n,t));return Promise.all(i)}async restoreAsset(e,t,i){const{type:n,uuid:o,meta:r,children:a}=e;let l;switch(n){case X.Folder:{l=Kt.create(void 0,o),t==null||t(l);for(const c of a||[])await this.restoreAsset(c,t,l);break}case X.Material:{l=qt.create(r.type,o),t==null||t(l);break}case X.Geometry:{l=Zt.create(r.type,o),t==null||t(l);break}case X.Texture:{l=await Xt.loadAsync(o),t==null||t(l);break}case X.Model:{l=await $t.loadAsync(o),t==null||t(l);break}case X.Script:{l=await Ie.loadAsync(o),t==null||t(l);break}case X.Audio:{l=await Yt.loadAsync(o),t==null||t(l);break}default:throw new Error(`Unsupported asset type: ${n}`)}return i==null||i.add(l),l}restoreAssetsValues(e,t,i,n){for(let o=0;o<t.length;o++){const r=t[o],a=e[o];this.restoreValues(a.meta,r.source,i,n),r.children&&a.children&&this.restoreAssetsValues(a.children,r.children,i,n)}}restoreObjects(e,t,i,n){return e.map(r=>this.restoreObject(r,t,i,n)).filter(r=>r!==void 0)}restoreObject(e,t,i,n,o){const{uuid:r,type:a,children:l=[]}=e;let c;if(a==="Model"){const h=e,u=t(h.instance);if(!u){n==null||n(`Asset with uuid ${h.instance} not found`);return}c=u.create(),i==null||i(c);for(const p in h.overrides){const m=h.overrides[p],g=ge(c,p);g.uuid=m.uuid}for(const p in h.inserts){const m=h.inserts[p],g=ge(c,p);for(const f of m)this.restoreObject(f,t,i,n,g)}}else{c=Ki(a),i==null||i(c);for(let h=0;h<l.length;h++){const u=l[h];this.restoreObject(u,t,i,n,c)}}return c.uuid=r,o==null||o.add(c),c}restoreObjectsValues(e,t,i,n,o){for(let r=0;r<t.length;r++){const a=t[r],l=e[r];if(l.type==="Model"){const c=l;for(const h in c.inserts){const u=ge(a,h),p=c.inserts[h];for(const m of p){const g=u.getObjectByProperty("uuid",m.uuid);g&&this.restoreObjectsValues([m],[g],i,n,o)}}for(const h in c.overrides){const u=ge(a,h),p=c.overrides[h],m=u.getObjectByProperty("uuid",p.uuid);m&&(this.restoreValues(p,m,i,n),o==null||o(m,p))}}else this.restoreValues(l,a,i,n),o==null||o(a,l),a.children&&l.children&&this.restoreObjectsValues(l.children,a.children,i,n,o)}}restoreSceneValues(e,t,i,n){e.fogType==="linear"?t.fog=Qt:e.fogType==="exp2"?t.fog=Jt:t.fog=null,this.restoreValues(e,t,i,n)}restoreConfigValues(e,t,i,n){this.restoreValues(e,t,i,n)}restoreValues(e,t,i,n){const o=Object.keys(e);for(const r of o){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const a=e[r];if(a!==void 0)if(typeof a=="object"){const l=Object.keys(a)[0];if(l===void 0)continue;switch(l){case"$A":{const c=i(a[l]);if(!c)throw new Error(`Asset with uuid ${a[l]} not found`);t[r]=c.source;break}case"$O":{const c=n(a[l]);if(!c)throw new Error(`Object with uuid ${a[l]} not found`);t[r]=c;break}case"$V":{t[r].fromArray(a[l]);break}case"$C":{t[r].set(a[l]);break}case"$E":{t[r]=a[l];break}default:t[r]&&this.restoreValues(a,t[r],i,n)}}else t[r]=a}}}const Ee=Symbol.for("d3-core.Entity");class F extends st{constructor(t){super();v(this,"object");v(this,"components");v(this,"core");v(this,"_onAdded",()=>{var i;if(!this.object.parent)return;const t=(i=F.extract(this.object.parent))==null?void 0:i.core;t&&this.object.traverse(n=>{var o;return(o=F.extract(n))==null?void 0:o.attach(t)})});v(this,"_onRemoved",()=>{this.object.traverse(t=>{var i;return(i=F.extract(t))==null?void 0:i.detach()})});this.object=t,this.components=[],this.object.addEventListener("added",this._onAdded),this.object.addEventListener("removed",this._onRemoved)}addComponent(t){return this.components.push(t),this.core&&t.attach(this.core),this.emit($e.ComponentAdd,t),t}removeComponent(t){const i=this.components.indexOf(t);i!==-1&&(t._destroy(),this.components.splice(i,1),this.emit($e.ComponentRemove,t))}getComponent(t){return this.components.find(i=>i instanceof t)}findComponent(t){return this.components.find(t)}destroy(){this.components.forEach(t=>t._destroy()),this.components.length=0,this.core=void 0,this.object.removeEventListener("added",this._onAdded),this.object.removeEventListener("removed",this._onRemoved),this.removeAllListeners()}attach(t){if(this.core){console.warn("Entity is already attached to a core.");return}this.core=t,this.components.forEach(i=>i.attach(t))}detach(){this.core&&(this.components.forEach(t=>t.detach()),this.core=void 0)}static from(t){let i=F.extract(t);return i||(i=new F(t),Object.defineProperty(t,Ee,{value:i,enumerable:!1,configurable:!0})),i}static extract(t){return t[Ee]}static destroy(t){t.traverse(i=>{const n=F.extract(i);n&&(n.destroy(),delete i[Ee])})}}function Um(d,e){return F.from(d).addComponent(e)}function Hm(d,e){var t;(t=F.extract(d))==null||t.removeComponent(e)}function Gm(d,e){var t;return(t=F.extract(d))==null?void 0:t.getComponent(e)}function Ym(d,e){var t;return(t=F.extract(d))==null?void 0:t.findComponent(e)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qi=s.BRDF_GGX,Ji=s.BRDF_Lambert,es=s.BasicPointShadowFilter,ts=s.BasicShadowFilter,is=s.Break,ss=s.Const,ns=s.Continue,os=s.DFGLUT,rs=s.D_GGX,as=s.Discard,ls=s.EPSILON,cs=s.F_Schlick,H=s.Fn,hs=s.INFINITY,ds=s.If,Ve=s.Loop,ps=s.NodeAccess,us=s.NodeShaderStage,ms=s.NodeType,gs=s.NodeUpdateType,fs=s.PCFShadowFilter,bs=s.PCFSoftShadowFilter,xs=s.PI,ys=s.PI2,ws=s.TWO_PI,vs=s.HALF_PI,_s=s.PointShadowFilter,Ts=s.Return,Cs=s.Schlick_to_F0,Ss=s.ShaderNode,ks=s.Stack,Es=s.Switch,Ms=s.TBNViewMatrix,Bs=s.VSMShadowFilter,Ls=s.V_GGX_SmithCorrelated,Is=s.Var,Ps=s.VarIntent,Rs=s.abs,Ds=s.acesFilmicToneMapping,Ns=s.acos,Fs=s.acosh,ct=s.add,As=s.addMethodChaining,zs=s.addNodeElement,Os=s.agxToneMapping,Vs=s.all,Ws=s.alphaT,js=s.and,Us=s.anisotropy,Hs=s.anisotropyB,Gs=s.anisotropyT,Ys=s.any,$s=s.append,Xs=s.array,Zs=s.arrayBuffer,qs=s.asin,Ks=s.asinh,Qs=s.assign,Js=s.atan,en=s.atanh,tn=s.atomicAdd,sn=s.atomicAnd,nn=s.atomicFunc,on=s.atomicLoad,rn=s.atomicMax,an=s.atomicMin,ln=s.atomicOr,cn=s.atomicStore,hn=s.atomicSub,dn=s.atomicXor,pn=s.attenuationColor,un=s.attenuationDistance,mn=s.attribute,gn=s.attributeArray,fn=s.backgroundBlurriness,bn=s.backgroundIntensity,xn=s.backgroundRotation,yn=s.batch,wn=s.bentNormalView,vn=s.billboarding,_n=s.bitAnd,Tn=s.bitNot,Cn=s.bitOr,Sn=s.bitXor,kn=s.bitangentGeometry,En=s.bitangentLocal,Mn=s.bitangentView,Bn=s.bitangentWorld,Ln=s.bitcast,In=s.blendBurn,Pn=s.blendColor,Rn=s.blendDodge,Dn=s.blendOverlay,Nn=s.blendScreen,Fn=s.blur,An=s.bool,zn=s.buffer,On=s.bufferAttribute,Vn=s.bumpMap,Wn=s.builtin,jn=s.builtinAOContext,Un=s.builtinShadowContext,Hn=s.bvec2,Gn=s.bvec3,Yn=s.bvec4,$n=s.bypass,Xn=s.cache,Zn=s.call,qn=s.cameraFar,Kn=s.cameraIndex,Qn=s.cameraNear,Jn=s.cameraNormalMatrix,eo=s.cameraPosition,to=s.cameraProjectionMatrix,io=s.cameraProjectionMatrixInverse,so=s.cameraViewMatrix,no=s.cameraViewport,oo=s.cameraWorldMatrix,ro=s.cbrt,ao=s.cdl,lo=s.ceil,co=s.checker,ho=s.cineonToneMapping,po=s.clamp,uo=s.clearcoat,mo=s.clearcoatNormalView,go=s.clearcoatRoughness,fo=s.clipSpace,bo=s.code,Pe=s.color,xo=s.colorSpaceToWorking,yo=s.colorToDirection,wo=s.compute,vo=s.computeKernel,_o=s.computeSkinning,To=s.context,Co=s.convert,So=s.convertColorSpace,ko=s.convertToTexture,Eo=s.countLeadingZeros,Mo=s.countOneBits,Bo=s.countTrailingZeros,Lo=s.cos,Io=s.cosh,Po=s.cross,Ro=s.cubeTexture,Do=s.cubeTextureBase,No=s.dFdx,Fo=s.dFdy,Ao=s.dashSize,zo=s.debug,Oo=s.decrement,Vo=s.decrementBefore,Wo=s.defaultBuildStages,jo=s.defaultShaderStages,Uo=s.defined,Ho=s.degrees,Go=s.deltaTime,Yo=s.densityFog,$o=s.densityFogFactor,Xo=s.depth,Zo=s.depthPass,qo=s.determinant,Ko=s.difference,Qo=s.diffuseColor,Jo=s.directPointLight,er=s.directionToColor,tr=s.directionToFaceDirection,ir=s.dispersion,sr=s.distance,nr=s.div,or=s.dot,rr=s.drawIndex,ar=s.dynamicBufferAttribute,lr=s.element,cr=s.emissive,hr=s.equal,dr=s.equirectUV,ht=s.exp,pr=s.exp2,ur=s.exponentialHeightFogFactor,mr=s.expression,gr=s.faceDirection,fr=s.faceForward,br=s.faceforward,Z=s.float,xr=s.floatBitsToInt,yr=s.floatBitsToUint,wr=s.floor,vr=s.fog,_r=s.fract,Tr=s.frameGroup,Cr=s.frameId,Sr=s.frontFacing,kr=s.fwidth,Er=s.gain,Mr=s.gapSize,Br=s.getConstNodeType,Lr=s.getCurrentStack,Ir=s.getDirection,Pr=s.getDistanceAttenuation,Rr=s.getGeometryRoughness,Dr=s.getNormalFromDepth,Nr=s.interleavedGradientNoise,Fr=s.vogelDiskSample,Ar=s.getParallaxCorrectNormal,zr=s.getRoughness,Or=s.getScreenPosition,Vr=s.getShIrradianceAt,Wr=s.getShadowMaterial,jr=s.getShadowRenderObjectFunction,Ur=s.getTextureIndex,Hr=s.getViewPosition,Gr=s.globalId,Yr=s.glsl,$r=s.glslFn,Xr=s.grayscale,Zr=s.greaterThan,qr=s.greaterThanEqual,Kr=s.hash,Qr=s.highpModelNormalViewMatrix,Jr=s.highpModelViewMatrix,ea=s.hue,ta=s.increment,ia=s.incrementBefore,sa=s.instance,na=s.instanceIndex,oa=s.instancedArray,ra=s.instancedBufferAttribute,aa=s.instancedDynamicBufferAttribute,la=s.instancedMesh,ce=s.int,ca=s.intBitsToFloat,ha=s.inverse,da=s.inverseSqrt,pa=s.inversesqrt,ua=s.invocationLocalIndex,ma=s.invocationSubgroupIndex,ga=s.ior,fa=s.iridescence,ba=s.iridescenceIOR,xa=s.iridescenceThickness,ya=s.ivec2,wa=s.ivec3,va=s.ivec4,_a=s.js,Ta=s.label,Ca=s.length,Sa=s.lengthSq,ka=s.lessThan,Ea=s.lessThanEqual,Ma=s.lightPosition,Ba=s.lightProjectionUV,La=s.lightShadowMatrix,Ia=s.lightTargetDirection,Pa=s.lightTargetPosition,Ra=s.lightViewPosition,Da=s.lightingContext,Na=s.lights,Fa=s.linearDepth,Aa=s.linearToneMapping,za=s.localId,Oa=s.log,Va=s.log2,Wa=s.logarithmicDepthToViewZ,dt=s.luminance,ja=s.mat2,Ua=s.mat3,Ha=s.mat4,Ga=s.matcapUV,Ya=s.materialAO,$a=s.materialAlphaTest,Xa=s.materialAnisotropy,Za=s.materialAnisotropyVector,qa=s.materialAttenuationColor,Ka=s.materialAttenuationDistance,Qa=s.materialClearcoat,Ja=s.materialClearcoatNormal,el=s.materialClearcoatRoughness,tl=s.materialColor,il=s.materialDispersion,sl=s.materialEmissive,nl=s.materialEnvIntensity,ol=s.materialEnvRotation,rl=s.materialIOR,al=s.materialIridescence,ll=s.materialIridescenceIOR,cl=s.materialIridescenceThickness,hl=s.materialLightMap,dl=s.materialLineDashOffset,pl=s.materialLineDashSize,ul=s.materialLineGapSize,ml=s.materialLineScale,gl=s.materialLineWidth,fl=s.materialMetalness,bl=s.materialNormal,xl=s.materialOpacity,yl=s.materialPointSize,wl=s.materialReference,vl=s.materialReflectivity,_l=s.materialRefractionRatio,Tl=s.materialRotation,Cl=s.materialRoughness,Sl=s.materialSheen,kl=s.materialSheenRoughness,El=s.materialShininess,Ml=s.materialSpecular,Bl=s.materialSpecularColor,Ll=s.materialSpecularIntensity,Il=s.materialSpecularStrength,Pl=s.materialThickness,Rl=s.materialTransmission,Dl=s.max,Nl=s.maxMipLevel,Fl=s.mediumpModelViewMatrix,Al=s.metalness,be=s.min,Re=s.mix,zl=s.mixElement,Ol=s.mod,Vl=s.modInt,Wl=s.modelDirection,jl=s.modelNormalMatrix,Ul=s.modelPosition,Hl=s.modelRadius,Gl=s.modelScale,Yl=s.modelViewMatrix,$l=s.modelViewPosition,Xl=s.modelViewProjection,Zl=s.modelWorldMatrix,ql=s.modelWorldMatrixInverse,Kl=s.morphReference,Ql=s.mrt,De=s.mul,Jl=s.mx_aastep,ec=s.mx_add,tc=s.mx_atan2,ic=s.mx_cell_noise_float,sc=s.mx_contrast,nc=s.mx_divide,oc=s.mx_fractal_noise_float,rc=s.mx_fractal_noise_vec2,ac=s.mx_fractal_noise_vec3,lc=s.mx_fractal_noise_vec4,cc=s.mx_frame,hc=s.mx_heighttonormal,dc=s.mx_hsvtorgb,pc=s.mx_ifequal,uc=s.mx_ifgreater,mc=s.mx_ifgreatereq,gc=s.mx_invert,fc=s.mx_modulo,bc=s.mx_multiply,xc=s.mx_noise_float,yc=s.mx_noise_vec3,wc=s.mx_noise_vec4,vc=s.mx_place2d,_c=s.mx_power,Tc=s.mx_ramp4,Cc=s.mx_ramplr,Sc=s.mx_ramptb,kc=s.mx_rgbtohsv,Ec=s.mx_rotate2d,Mc=s.mx_rotate3d,Bc=s.mx_safepower,Lc=s.mx_separate,Ic=s.mx_splitlr,Pc=s.mx_splittb,Rc=s.mx_srgb_texture_to_lin_rec709,Dc=s.mx_subtract,Nc=s.mx_timer,Fc=s.mx_transform_uv,Ac=s.mx_unifiednoise2d,zc=s.mx_unifiednoise3d,Oc=s.mx_worley_noise_float,Vc=s.mx_worley_noise_vec2,Wc=s.mx_worley_noise_vec3,jc=s.negate,Uc=s.neutralToneMapping,Hc=s.nodeArray,Gc=s.nodeImmutable,we=s.nodeObject,Yc=s.nodeObjectIntent,$c=s.nodeObjects,Xc=s.nodeProxy,Zc=s.nodeProxyIntent,qc=s.normalFlat,Kc=s.normalGeometry,Qc=s.normalLocal,Jc=s.normalMap,eh=s.normalView,th=s.normalViewGeometry,ih=s.normalWorld,sh=s.normalWorldGeometry,nh=s.normalize,oh=s.not,rh=s.notEqual,ah=s.numWorkgroups,lh=s.objectDirection,ch=s.objectGroup,hh=s.objectPosition,dh=s.objectRadius,ph=s.objectScale,uh=s.objectViewPosition,mh=s.objectWorldMatrix,gh=s.OnBeforeObjectUpdate,fh=s.OnBeforeMaterialUpdate,bh=s.OnObjectUpdate,pt=s.OnMaterialUpdate,xh=s.oneMinus,yh=s.or,ut=s.orthographicDepthToViewZ,wh=s.oscSawtooth,vh=s.oscSine,_h=s.oscSquare,Th=s.oscTriangle,Ch=s.output,Sh=s.outputStruct,kh=s.overloadingFn,Eh=s.packHalf2x16,Mh=s.packSnorm2x16,Bh=s.packUnorm2x16,Lh=s.parabola,Ih=s.parallaxDirection,Ph=s.parallaxUV,Rh=s.parameter,mt=s.pass,We=s.passTexture,Dh=s.pcurve,gt=s.perspectiveDepthToViewZ,Nh=s.pmremTexture,Fh=s.pointShadow,Ah=s.pointUV,zh=s.pointWidth,Oh=s.positionGeometry,Vh=s.positionLocal,Wh=s.positionPrevious,ft=s.positionView,jh=s.positionViewDirection,Uh=s.positionWorld,Hh=s.positionWorldDirection,Gh=s.posterize,Yh=s.pow,$h=s.pow2,Xh=s.pow3,Zh=s.pow4,qh=s.premultiplyAlpha,Kh=s.property,Qh=s.radians,Jh=s.rand,ed=s.range,td=s.rangeFog,id=s.rangeFogFactor,sd=s.reciprocal,Ne=s.reference,nd=s.referenceBuffer,od=s.reflect,rd=s.reflectVector,ad=s.reflectView,ld=s.reflector,cd=s.refract,hd=s.refractVector,dd=s.refractView,pd=s.reinhardToneMapping,ud=s.remap,md=s.remapClamp,gd=s.renderGroup,bt=s.renderOutput,fd=s.rendererReference,bd=s.replaceDefaultUV,xd=s.rotate,yd=s.rotateUV,wd=s.roughness,vd=s.round,_d=s.rtt,Td=s.sRGBTransferEOTF,Cd=s.sRGBTransferOETF,Sd=s.sample,kd=s.sampler,Ed=s.samplerComparison,Md=s.saturate,Bd=s.saturation,Ld=s.screen,Id=s.screenCoordinate,Pd=s.screenDPR,Rd=s.screenSize,je=s.screenUV,Dd=s.select,Nd=s.setCurrentStack,Fd=s.setName,Ad=s.shaderStages,zd=s.shadow,Od=s.shadowPositionWorld,Vd=s.shapeCircle,Wd=s.sharedUniformGroup,jd=s.sheen,Ud=s.sheenRoughness,Hd=s.shiftLeft,Gd=s.shiftRight,Yd=s.shininess,$d=s.sign,Xd=s.sin,Zd=s.sinh,qd=s.sinc,Kd=s.skinning,xt=s.smoothstep,Qd=s.smoothstepElement,Jd=s.specularColor,ep=s.specularF90,tp=s.spherizeUV,ip=s.split,sp=s.spritesheetUV,np=s.sqrt,op=s.stack,ae=s.step,rp=s.stepElement,ap=s.storage,lp=s.storageBarrier,cp=s.storageTexture,hp=s.string,dp=s.struct,pp=s.sub,up=s.subgroupAdd,mp=s.subgroupAll,gp=s.subgroupAnd,fp=s.subgroupAny,bp=s.subgroupBallot,xp=s.subgroupBroadcast,yp=s.subgroupBroadcastFirst,wp=s.subBuild,vp=s.subgroupElect,_p=s.subgroupExclusiveAdd,Tp=s.subgroupExclusiveMul,Cp=s.subgroupInclusiveAdd,Sp=s.subgroupInclusiveMul,kp=s.subgroupIndex,Ep=s.subgroupMax,Mp=s.subgroupMin,Bp=s.subgroupMul,Lp=s.subgroupOr,Ip=s.subgroupShuffle,Pp=s.subgroupShuffleDown,Rp=s.subgroupShuffleUp,Dp=s.subgroupShuffleXor,Np=s.subgroupSize,Fp=s.subgroupXor,Ap=s.tan,zp=s.tanh,Op=s.tangentGeometry,Vp=s.tangentLocal,Wp=s.tangentView,jp=s.tangentWorld,R=s.texture,Up=s.texture3D,Hp=s.textureBarrier,Gp=s.textureBicubic,Yp=s.textureBicubicLevel,$p=s.textureCubeUV,Xp=s.textureLoad,Fe=s.textureSize,Zp=s.textureLevel,qp=s.textureStore,Kp=s.thickness,Qp=s.time,Jp=s.toneMapping,eu=s.toneMappingExposure,tu=s.toonOutlinePass,iu=s.transformDirection,su=s.transformNormal,nu=s.transformNormalToView,ou=s.transformedClearcoatNormalView,ru=s.transformedNormalView,au=s.transformedNormalWorld,lu=s.transmission,cu=s.transpose,hu=s.triNoise3D,du=s.triplanarTexture,pu=s.triplanarTextures,uu=s.trunc,mu=s.uint,gu=s.uintBitsToFloat,D=s.uniform,xe=s.uniformArray,fu=s.uniformCubeTexture,bu=s.uniformGroup,xu=s.uniformFlow,yu=s.uniformTexture,wu=s.unpackHalf2x16,vu=s.unpackSnorm2x16,_u=s.unpackUnorm2x16,Tu=s.unpremultiplyAlpha,Cu=s.userData,ve=s.uv,Su=s.uvec2,ku=s.uvec3,Eu=s.uvec4,Mu=s.varying,Bu=s.varyingProperty,le=s.vec2,oe=s.vec3,O=s.vec4,Lu=s.vectorComponents,Iu=s.velocity,Pu=s.vertexColor,Ru=s.vertexIndex,Du=s.vertexStage,Nu=s.vibrance,Fu=s.viewZToLogarithmicDepth,Au=s.viewZToOrthographicDepth,zu=s.viewZToPerspectiveDepth,Ou=s.viewZToReversedOrthographicDepth,Vu=s.viewZToReversedPerspectiveDepth,Wu=s.viewport,ju=s.viewportCoordinate,Uu=s.viewportDepthTexture,Hu=s.viewportLinearDepth,Gu=s.viewportMipTexture,Yu=s.viewportOpaqueMipTexture,$u=s.viewportResolution,Xu=s.viewportSafeUV,Zu=s.viewportSharedTexture,qu=s.viewportSize,Ku=s.viewportTexture,Qu=s.viewportUV,Ju=s.wgsl,em=s.wgslFn,tm=s.workgroupArray,im=s.workgroupBarrier,sm=s.workgroupId,nm=s.workingToColorSpace,om=s.xor,$m=Object.freeze(Object.defineProperty({__proto__:null,BRDF_GGX:Qi,BRDF_Lambert:Ji,BasicPointShadowFilter:es,BasicShadowFilter:ts,Break:is,Const:ss,Continue:ns,DFGLUT:os,D_GGX:rs,Discard:as,EPSILON:ls,F_Schlick:cs,Fn:H,HALF_PI:vs,INFINITY:hs,If:ds,Loop:Ve,NodeAccess:ps,NodeShaderStage:us,NodeType:ms,NodeUpdateType:gs,OnBeforeMaterialUpdate:fh,OnBeforeObjectUpdate:gh,OnMaterialUpdate:pt,OnObjectUpdate:bh,PCFShadowFilter:fs,PCFSoftShadowFilter:bs,PI:xs,PI2:ys,PointShadowFilter:_s,Return:Ts,Schlick_to_F0:Cs,ShaderNode:Ss,Stack:ks,Switch:Es,TBNViewMatrix:Ms,TWO_PI:ws,VSMShadowFilter:Bs,V_GGX_SmithCorrelated:Ls,Var:Is,VarIntent:Ps,abs:Rs,acesFilmicToneMapping:Ds,acos:Ns,acosh:Fs,add:ct,addMethodChaining:As,addNodeElement:zs,agxToneMapping:Os,all:Vs,alphaT:Ws,and:js,anisotropy:Us,anisotropyB:Hs,anisotropyT:Gs,any:Ys,append:$s,array:Xs,arrayBuffer:Zs,asin:qs,asinh:Ks,assign:Qs,atan:Js,atanh:en,atomicAdd:tn,atomicAnd:sn,atomicFunc:nn,atomicLoad:on,atomicMax:rn,atomicMin:an,atomicOr:ln,atomicStore:cn,atomicSub:hn,atomicXor:dn,attenuationColor:pn,attenuationDistance:un,attribute:mn,attributeArray:gn,backgroundBlurriness:fn,backgroundIntensity:bn,backgroundRotation:xn,batch:yn,bentNormalView:wn,billboarding:vn,bitAnd:_n,bitNot:Tn,bitOr:Cn,bitXor:Sn,bitangentGeometry:kn,bitangentLocal:En,bitangentView:Mn,bitangentWorld:Bn,bitcast:Ln,blendBurn:In,blendColor:Pn,blendDodge:Rn,blendOverlay:Dn,blendScreen:Nn,blur:Fn,bool:An,buffer:zn,bufferAttribute:On,builtin:Wn,builtinAOContext:jn,builtinShadowContext:Un,bumpMap:Vn,bvec2:Hn,bvec3:Gn,bvec4:Yn,bypass:$n,cache:Xn,call:Zn,cameraFar:qn,cameraIndex:Kn,cameraNear:Qn,cameraNormalMatrix:Jn,cameraPosition:eo,cameraProjectionMatrix:to,cameraProjectionMatrixInverse:io,cameraViewMatrix:so,cameraViewport:no,cameraWorldMatrix:oo,cbrt:ro,cdl:ao,ceil:lo,checker:co,cineonToneMapping:ho,clamp:po,clearcoat:uo,clearcoatNormalView:mo,clearcoatRoughness:go,clipSpace:fo,code:bo,color:Pe,colorSpaceToWorking:xo,colorToDirection:yo,compute:wo,computeKernel:vo,computeSkinning:_o,context:To,convert:Co,convertColorSpace:So,convertToTexture:ko,cos:Lo,cosh:Io,countLeadingZeros:Eo,countOneBits:Mo,countTrailingZeros:Bo,cross:Po,cubeTexture:Ro,cubeTextureBase:Do,dFdx:No,dFdy:Fo,dashSize:Ao,debug:zo,decrement:Oo,decrementBefore:Vo,defaultBuildStages:Wo,defaultShaderStages:jo,defined:Uo,degrees:Ho,deltaTime:Go,densityFog:Yo,densityFogFactor:$o,depth:Xo,depthPass:Zo,determinant:qo,difference:Ko,diffuseColor:Qo,directPointLight:Jo,directionToColor:er,directionToFaceDirection:tr,dispersion:ir,distance:sr,div:nr,dot:or,drawIndex:rr,dynamicBufferAttribute:ar,element:lr,emissive:cr,equal:hr,equirectUV:dr,exp:ht,exp2:pr,exponentialHeightFogFactor:ur,expression:mr,faceDirection:gr,faceForward:fr,faceforward:br,float:Z,floatBitsToInt:xr,floatBitsToUint:yr,floor:wr,fog:vr,fract:_r,frameGroup:Tr,frameId:Cr,frontFacing:Sr,fwidth:kr,gain:Er,gapSize:Mr,getConstNodeType:Br,getCurrentStack:Lr,getDirection:Ir,getDistanceAttenuation:Pr,getGeometryRoughness:Rr,getNormalFromDepth:Dr,getParallaxCorrectNormal:Ar,getRoughness:zr,getScreenPosition:Or,getShIrradianceAt:Vr,getShadowMaterial:Wr,getShadowRenderObjectFunction:jr,getTextureIndex:Ur,getViewPosition:Hr,globalId:Gr,glsl:Yr,glslFn:$r,grayscale:Xr,greaterThan:Zr,greaterThanEqual:qr,hash:Kr,highpModelNormalViewMatrix:Qr,highpModelViewMatrix:Jr,hue:ea,increment:ta,incrementBefore:ia,instance:sa,instanceIndex:na,instancedArray:oa,instancedBufferAttribute:ra,instancedDynamicBufferAttribute:aa,instancedMesh:la,int:ce,intBitsToFloat:ca,interleavedGradientNoise:Nr,inverse:ha,inverseSqrt:da,inversesqrt:pa,invocationLocalIndex:ua,invocationSubgroupIndex:ma,ior:ga,iridescence:fa,iridescenceIOR:ba,iridescenceThickness:xa,ivec2:ya,ivec3:wa,ivec4:va,js:_a,label:Ta,length:Ca,lengthSq:Sa,lessThan:ka,lessThanEqual:Ea,lightPosition:Ma,lightProjectionUV:Ba,lightShadowMatrix:La,lightTargetDirection:Ia,lightTargetPosition:Pa,lightViewPosition:Ra,lightingContext:Da,lights:Na,linearDepth:Fa,linearToneMapping:Aa,localId:za,log:Oa,log2:Va,logarithmicDepthToViewZ:Wa,luminance:dt,mat2:ja,mat3:Ua,mat4:Ha,matcapUV:Ga,materialAO:Ya,materialAlphaTest:$a,materialAnisotropy:Xa,materialAnisotropyVector:Za,materialAttenuationColor:qa,materialAttenuationDistance:Ka,materialClearcoat:Qa,materialClearcoatNormal:Ja,materialClearcoatRoughness:el,materialColor:tl,materialDispersion:il,materialEmissive:sl,materialEnvIntensity:nl,materialEnvRotation:ol,materialIOR:rl,materialIridescence:al,materialIridescenceIOR:ll,materialIridescenceThickness:cl,materialLightMap:hl,materialLineDashOffset:dl,materialLineDashSize:pl,materialLineGapSize:ul,materialLineScale:ml,materialLineWidth:gl,materialMetalness:fl,materialNormal:bl,materialOpacity:xl,materialPointSize:yl,materialReference:wl,materialReflectivity:vl,materialRefractionRatio:_l,materialRotation:Tl,materialRoughness:Cl,materialSheen:Sl,materialSheenRoughness:kl,materialShininess:El,materialSpecular:Ml,materialSpecularColor:Bl,materialSpecularIntensity:Ll,materialSpecularStrength:Il,materialThickness:Pl,materialTransmission:Rl,max:Dl,maxMipLevel:Nl,mediumpModelViewMatrix:Fl,metalness:Al,min:be,mix:Re,mixElement:zl,mod:Ol,modInt:Vl,modelDirection:Wl,modelNormalMatrix:jl,modelPosition:Ul,modelRadius:Hl,modelScale:Gl,modelViewMatrix:Yl,modelViewPosition:$l,modelViewProjection:Xl,modelWorldMatrix:Zl,modelWorldMatrixInverse:ql,morphReference:Kl,mrt:Ql,mul:De,mx_aastep:Jl,mx_add:ec,mx_atan2:tc,mx_cell_noise_float:ic,mx_contrast:sc,mx_divide:nc,mx_fractal_noise_float:oc,mx_fractal_noise_vec2:rc,mx_fractal_noise_vec3:ac,mx_fractal_noise_vec4:lc,mx_frame:cc,mx_heighttonormal:hc,mx_hsvtorgb:dc,mx_ifequal:pc,mx_ifgreater:uc,mx_ifgreatereq:mc,mx_invert:gc,mx_modulo:fc,mx_multiply:bc,mx_noise_float:xc,mx_noise_vec3:yc,mx_noise_vec4:wc,mx_place2d:vc,mx_power:_c,mx_ramp4:Tc,mx_ramplr:Cc,mx_ramptb:Sc,mx_rgbtohsv:kc,mx_rotate2d:Ec,mx_rotate3d:Mc,mx_safepower:Bc,mx_separate:Lc,mx_splitlr:Ic,mx_splittb:Pc,mx_srgb_texture_to_lin_rec709:Rc,mx_subtract:Dc,mx_timer:Nc,mx_transform_uv:Fc,mx_unifiednoise2d:Ac,mx_unifiednoise3d:zc,mx_worley_noise_float:Oc,mx_worley_noise_vec2:Vc,mx_worley_noise_vec3:Wc,negate:jc,neutralToneMapping:Uc,nodeArray:Hc,nodeImmutable:Gc,nodeObject:we,nodeObjectIntent:Yc,nodeObjects:$c,nodeProxy:Xc,nodeProxyIntent:Zc,normalFlat:qc,normalGeometry:Kc,normalLocal:Qc,normalMap:Jc,normalView:eh,normalViewGeometry:th,normalWorld:ih,normalWorldGeometry:sh,normalize:nh,not:oh,notEqual:rh,numWorkgroups:ah,objectDirection:lh,objectGroup:ch,objectPosition:hh,objectRadius:dh,objectScale:ph,objectViewPosition:uh,objectWorldMatrix:mh,oneMinus:xh,or:yh,orthographicDepthToViewZ:ut,oscSawtooth:wh,oscSine:vh,oscSquare:_h,oscTriangle:Th,output:Ch,outputStruct:Sh,overloadingFn:kh,packHalf2x16:Eh,packSnorm2x16:Mh,packUnorm2x16:Bh,parabola:Lh,parallaxDirection:Ih,parallaxUV:Ph,parameter:Rh,pass:mt,passTexture:We,pcurve:Dh,perspectiveDepthToViewZ:gt,pmremTexture:Nh,pointShadow:Fh,pointUV:Ah,pointWidth:zh,positionGeometry:Oh,positionLocal:Vh,positionPrevious:Wh,positionView:ft,positionViewDirection:jh,positionWorld:Uh,positionWorldDirection:Hh,posterize:Gh,pow:Yh,pow2:$h,pow3:Xh,pow4:Zh,premultiplyAlpha:qh,property:Kh,radians:Qh,rand:Jh,range:ed,rangeFog:td,rangeFogFactor:id,reciprocal:sd,reference:Ne,referenceBuffer:nd,reflect:od,reflectVector:rd,reflectView:ad,reflector:ld,refract:cd,refractVector:hd,refractView:dd,reinhardToneMapping:pd,remap:ud,remapClamp:md,renderGroup:gd,renderOutput:bt,rendererReference:fd,replaceDefaultUV:bd,rotate:xd,rotateUV:yd,roughness:wd,round:vd,rtt:_d,sRGBTransferEOTF:Td,sRGBTransferOETF:Cd,sample:Sd,sampler:kd,samplerComparison:Ed,saturate:Md,saturation:Bd,screen:Ld,screenCoordinate:Id,screenDPR:Pd,screenSize:Rd,screenUV:je,select:Dd,setCurrentStack:Nd,setName:Fd,shaderStages:Ad,shadow:zd,shadowPositionWorld:Od,shapeCircle:Vd,sharedUniformGroup:Wd,sheen:jd,sheenRoughness:Ud,shiftLeft:Hd,shiftRight:Gd,shininess:Yd,sign:$d,sin:Xd,sinc:qd,sinh:Zd,skinning:Kd,smoothstep:xt,smoothstepElement:Qd,specularColor:Jd,specularF90:ep,spherizeUV:tp,split:ip,spritesheetUV:sp,sqrt:np,stack:op,step:ae,stepElement:rp,storage:ap,storageBarrier:lp,storageTexture:cp,string:hp,struct:dp,sub:pp,subBuild:wp,subgroupAdd:up,subgroupAll:mp,subgroupAnd:gp,subgroupAny:fp,subgroupBallot:bp,subgroupBroadcast:xp,subgroupBroadcastFirst:yp,subgroupElect:vp,subgroupExclusiveAdd:_p,subgroupExclusiveMul:Tp,subgroupInclusiveAdd:Cp,subgroupInclusiveMul:Sp,subgroupIndex:kp,subgroupMax:Ep,subgroupMin:Mp,subgroupMul:Bp,subgroupOr:Lp,subgroupShuffle:Ip,subgroupShuffleDown:Pp,subgroupShuffleUp:Rp,subgroupShuffleXor:Dp,subgroupSize:Np,subgroupXor:Fp,tan:Ap,tangentGeometry:Op,tangentLocal:Vp,tangentView:Wp,tangentWorld:jp,tanh:zp,texture:R,texture3D:Up,textureBarrier:Hp,textureBicubic:Gp,textureBicubicLevel:Yp,textureCubeUV:$p,textureLevel:Zp,textureLoad:Xp,textureSize:Fe,textureStore:qp,thickness:Kp,time:Qp,toneMapping:Jp,toneMappingExposure:eu,toonOutlinePass:tu,transformDirection:iu,transformNormal:su,transformNormalToView:nu,transformedClearcoatNormalView:ou,transformedNormalView:ru,transformedNormalWorld:au,transmission:lu,transpose:cu,triNoise3D:hu,triplanarTexture:du,triplanarTextures:pu,trunc:uu,uint:mu,uintBitsToFloat:gu,uniform:D,uniformArray:xe,uniformCubeTexture:fu,uniformFlow:xu,uniformGroup:bu,uniformTexture:yu,unpackHalf2x16:wu,unpackSnorm2x16:vu,unpackUnorm2x16:_u,unpremultiplyAlpha:Tu,userData:Cu,uv:ve,uvec2:Su,uvec3:ku,uvec4:Eu,varying:Mu,varyingProperty:Bu,vec2:le,vec3:oe,vec4:O,vectorComponents:Lu,velocity:Iu,vertexColor:Pu,vertexIndex:Ru,vertexStage:Du,vibrance:Nu,viewZToLogarithmicDepth:Fu,viewZToOrthographicDepth:Au,viewZToPerspectiveDepth:zu,viewZToReversedOrthographicDepth:Ou,viewZToReversedPerspectiveDepth:Vu,viewport:Wu,viewportCoordinate:ju,viewportDepthTexture:Uu,viewportLinearDepth:Hu,viewportMipTexture:Gu,viewportOpaqueMipTexture:Yu,viewportResolution:$u,viewportSafeUV:Xu,viewportSharedTexture:Zu,viewportSize:qu,viewportTexture:Ku,viewportUV:Qu,vogelDiskSample:Fr,wgsl:Ju,wgslFn:em,workgroupArray:tm,workgroupBarrier:im,workgroupId:sm,workingToColorSpace:nm,xor:om},Symbol.toStringTag,{value:"Module"})),V=new ze,rm=new S,am=new S(1,0),lm=new S(0,1);let Me;class cm extends ot{static get type(){return"BloomNode"}constructor(e,t=1,i=0,n=0){super("vec4"),this.inputNode=e,this.strength=D(t),this.radius=D(i),this.threshold=D(n),this.smoothWidth=D(.01),this._renderTargetsHorizontal=[],this._renderTargetsVertical=[],this._nMips=5,this._renderTargetBright=new W(1,1,{depthBuffer:!1,type:fe}),this._renderTargetBright.texture.name="UnrealBloomPass.bright",this._renderTargetBright.texture.generateMipmaps=!1;for(let o=0;o<this._nMips;o++){const r=new W(1,1,{depthBuffer:!1,type:fe});r.texture.name="UnrealBloomPass.h"+o,r.texture.generateMipmaps=!1,this._renderTargetsHorizontal.push(r);const a=new W(1,1,{depthBuffer:!1,type:fe});a.texture.name="UnrealBloomPass.v"+o,a.texture.generateMipmaps=!1,this._renderTargetsVertical.push(a)}this._compositeMaterial=null,this._highPassFilterMaterial=null,this._separableBlurMaterials=[],this._textureNodeBright=R(this._renderTargetBright.texture),this._textureNodeBlur0=R(this._renderTargetsVertical[0].texture),this._textureNodeBlur1=R(this._renderTargetsVertical[1].texture),this._textureNodeBlur2=R(this._renderTargetsVertical[2].texture),this._textureNodeBlur3=R(this._renderTargetsVertical[3].texture),this._textureNodeBlur4=R(this._renderTargetsVertical[4].texture),this._textureOutput=We(this,this._renderTargetsHorizontal[0].texture),this.updateBeforeType=rt.FRAME}getTextureNode(){return this._textureOutput}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this._renderTargetBright.setSize(i,n);for(let o=0;o<this._nMips;o++)this._renderTargetsHorizontal[o].setSize(i,n),this._renderTargetsVertical[o].setSize(i,n),this._separableBlurMaterials[o].invSize.value.set(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}updateBefore(e){const{renderer:t}=e;Me=q.resetRendererState(t,Me);const i=t.getDrawingBufferSize(rm);this.setSize(i.width,i.height),t.setRenderTarget(this._renderTargetBright),V.material=this._highPassFilterMaterial,V.name="Bloom [ High Pass ]",V.render(t);let n=this._renderTargetBright;for(let o=0;o<this._nMips;o++)V.material=this._separableBlurMaterials[o],this._separableBlurMaterials[o].colorTexture.value=n.texture,this._separableBlurMaterials[o].direction.value=am,t.setRenderTarget(this._renderTargetsHorizontal[o]),V.name=`Bloom [ Blur Horizontal - ${o} ]`,V.render(t),this._separableBlurMaterials[o].colorTexture.value=this._renderTargetsHorizontal[o].texture,this._separableBlurMaterials[o].direction.value=lm,t.setRenderTarget(this._renderTargetsVertical[o]),V.name=`Bloom [ Blur Vertical - ${o} ]`,V.render(t),n=this._renderTargetsVertical[o];t.setRenderTarget(this._renderTargetsHorizontal[0]),V.material=this._compositeMaterial,V.name="Bloom [ Composite ]",V.render(t),q.restoreRendererState(t,Me)}setup(e){const t=H(()=>{const l=this.inputNode,c=dt(l.rgb),h=xt(this.threshold,this.threshold.add(this.smoothWidth),c);return Re(O(0),l,h)});this._highPassFilterMaterial=this._highPassFilterMaterial||new j,this._highPassFilterMaterial.fragmentNode=t().context(e.getSharedContext()),this._highPassFilterMaterial.name="Bloom_highPass",this._highPassFilterMaterial.needsUpdate=!0;const i=[6,10,14,18,22];for(let l=0;l<this._nMips;l++)this._separableBlurMaterials.push(this._getSeparableBlurMaterial(e,i[l]));const n=xe([1,.8,.6,.4,.2]),o=xe([new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)]),r=H(([l,c])=>{const h=Z(1.2).sub(l);return Re(l,h,c)}).setLayout({name:"lerpBloomFactor",type:"float",inputs:[{name:"factor",type:"float"},{name:"radius",type:"float"}]}),a=H(()=>{const l=r(n.element(0),this.radius).mul(O(o.element(0),1)).mul(this._textureNodeBlur0),c=r(n.element(1),this.radius).mul(O(o.element(1),1)).mul(this._textureNodeBlur1),h=r(n.element(2),this.radius).mul(O(o.element(2),1)).mul(this._textureNodeBlur2),u=r(n.element(3),this.radius).mul(O(o.element(3),1)).mul(this._textureNodeBlur3),p=r(n.element(4),this.radius).mul(O(o.element(4),1)).mul(this._textureNodeBlur4);return l.add(c).add(h).add(u).add(p).mul(this.strength)});return this._compositeMaterial=this._compositeMaterial||new j,this._compositeMaterial.fragmentNode=a().context(e.getSharedContext()),this._compositeMaterial.name="Bloom_comp",this._compositeMaterial.needsUpdate=!0,this._textureOutput}dispose(){for(let e=0;e<this._renderTargetsHorizontal.length;e++)this._renderTargetsHorizontal[e].dispose();for(let e=0;e<this._renderTargetsVertical.length;e++)this._renderTargetsVertical[e].dispose();this._renderTargetBright.dispose(),this._highPassFilterMaterial!==null&&this._highPassFilterMaterial.dispose(),this._compositeMaterial!==null&&this._compositeMaterial.dispose();for(let e=0;e<this._separableBlurMaterials.length;e++)this._separableBlurMaterials[e].dispose()}_getSeparableBlurMaterial(e,t){const i=[],n=t/3;for(let m=0;m<t;m++)i.push(.39894*Math.exp(-.5*m*m/(n*n))/n);const o=R(null),r=xe(i),a=D(new S),l=D(new S(.5,.5)),c=ve(),h=m=>o.sample(m),u=H(()=>{const m=h(c).rgb.mul(r.element(0)).toVar();return Ve({start:ce(1),end:ce(t),type:"int",condition:"<"},({i:g})=>{const f=Z(g),C=r.element(g),_=l.mul(a).mul(f),T=h(c.add(_)).rgb,L=h(c.sub(_)).rgb;m.addAssign(ct(T,L).mul(C))}),O(m,1)}),p=new j;return p.fragmentNode=u().context(e.getSharedContext()),p.name="Bloom_separable",p.needsUpdate=!0,p.colorTexture=o,p.direction=l,p.invSize=a,p}}const hm=(d,e,t,i)=>new cm(we(d),e,t,i);class yt{constructor(e,t){this.uid=e,this.cid=e.match(/^(.*):f(\d+)$/)[1],this.name=t,this.timestamp=0,this.cpu=0,this.gpu=0,this.fps=0,this.children=[],this.parent=null}}class dm extends yt{constructor(e,t,i,n){let o=t.name;o===""&&(t.isScene?o="Scene":t.isQuadMesh&&(o="QuadMesh")),super(e,o),this.scene=t,this.camera=i,this.renderTarget=n,this.isRenderStats=!0}}class pm extends yt{constructor(e,t){super(e,t.name),this.computeNode=t,this.isComputeStats=!0}}class um extends Pi{constructor(){super(),this.currentFrame=null,this.currentRender=null,this.currentNodes=null,this.lastFrame=null,this.frames=[],this.framesLib={},this.maxFrames=512,this._lastFinishTime=0,this._resolveTimestampPromise=null,this.isRendererInspector=!0}getParent(){return this.currentRender||this.getFrame()}begin(){this.currentFrame=this._createFrame(),this.currentRender=this.currentFrame,this.currentNodes=[]}finish(){const e=performance.now(),t=this.currentFrame;t.finishTime=e,t.deltaTime=e-(this._lastFinishTime>0?this._lastFinishTime:e),this.addFrame(t),this.fps=this._getFPS(),this.lastFrame=t,this.currentFrame=null,this.currentRender=null,this.currentNodes=null,this._lastFinishTime=e}_getFPS(){let e=0,t=0;for(let i=this.frames.length-1;i>=0;i--){const n=this.frames[i];if(e++,t+=n.deltaTime,t>=1e3)break}return e*1e3/t}_createFrame(){return{frameId:this.nodeFrame.frameId,resolvedCompute:!1,resolvedRender:!1,deltaTime:0,startTime:performance.now(),finishTime:0,miscellaneous:0,children:[],renders:[],computes:[]}}getFrame(){return this.currentFrame||this.lastFrame}getFrameById(e){return this.framesLib[e]||null}updateTabs(){}resolveFrame(){}async resolveTimestamp(){return this._resolveTimestampPromise!==null?this._resolveTimestampPromise:(this._resolveTimestampPromise=new Promise(e=>{requestAnimationFrame(async()=>{const t=this.getRenderer();await t.resolveTimestampsAsync(ue.COMPUTE),await t.resolveTimestampsAsync(ue.RENDER);const i=t.backend.getTimestampFrames(ue.COMPUTE),n=t.backend.getTimestampFrames(ue.RENDER),o=[...new Set([...i,...n])];for(const r of o){const a=this.getFrameById(r);if(a!==null){if(a.resolvedCompute===!1)if(a.computes.length>0){if(i.includes(r)){for(const l of a.computes)t.backend.hasTimestamp(l.uid)?l.gpu=t.backend.getTimestamp(l.uid):(l.gpu=0,l.gpuNotAvailable=!0);a.resolvedCompute=!0}}else a.resolvedCompute=!0;if(a.resolvedRender===!1)if(a.renders.length>0){if(n.includes(r)){for(const l of a.renders)t.backend.hasTimestamp(l.uid)?l.gpu=t.backend.getTimestamp(l.uid):(l.gpu=0,l.gpuNotAvailable=!0);a.resolvedRender=!0}}else a.resolvedRender=!0;a.resolvedCompute===!0&&a.resolvedRender===!0&&this.resolveFrame(a)}}this._resolveTimestampPromise=null,e()})}),this._resolveTimestampPromise)}get isAvailable(){return this.getRenderer()!==null}addFrame(e){if(this.frames.length>=this.maxFrames){const t=this.frames.shift();delete this.framesLib[t.frameId]}this.frames.push(e),this.framesLib[e.frameId]=e,this.isAvailable&&(this.updateTabs(),this.resolveTimestamp())}inspect(e){const t=this.currentNodes;t!==null?t.push(e):ei('RendererInspector: Unable to inspect node outside of frame scope. Use "renderer.setAnimationLoop()".')}beginCompute(e,t){const i=this.getFrame();if(!i)return;const n=new pm(e,t);n.timestamp=performance.now(),n.parent=this.currentCompute||this.getParent(),i.computes.push(n),this.currentRender!==null?this.currentRender.children.push(n):i.children.push(n),this.currentCompute=n}finishCompute(){if(!this.getFrame())return;const t=this.currentCompute;t.cpu=performance.now()-t.timestamp,this.currentCompute=t.parent.isComputeStats?t.parent:null}beginRender(e,t,i,n){const o=this.getFrame();if(!o)return;const r=new dm(e,t,i,n);r.timestamp=performance.now(),r.parent=this.getParent(),o.renders.push(r),this.currentRender!==null?this.currentRender.children.push(r):o.children.push(r),this.currentRender=r}finishRender(){if(!this.getFrame())return;const t=this.currentRender;t.cpu=performance.now()-t.timestamp,this.currentRender=t.parent}}class mm{static init(){if(document.getElementById("profiler-styles"))return;const e=`
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
`,t=document.createElement("style");t.id="profiler-styles",t.textContent=e,document.head.appendChild(t)}}class gm extends Ae{constructor(e){super(),this.inspector=e,this.tabs={},this.activeTabId=null,this.isResizing=!1,this.lastHeightBottom=350,this.lastWidthRight=450,this.position="bottom",this.detachedWindows=[],this.maxZIndex=1002,this.nextTabOriginalIndex=0,mm.init(),this.setupShell(),this.setupResizing(),this.setupWindowResizeListener(),this.setupOrientationListener()}getSize(){return this.panel.classList.contains("visible")===!1||this.panel.classList.contains("no-tabs")?{width:0,height:0}:this.position==="right"?{width:this.panel.offsetWidth,height:0}:{width:0,height:this.panel.offsetHeight}}get isMobile(){return this.detectMobile()}get isSmallScreen(){return window.innerWidth<=768}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,t=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),i="ontouchstart"in window||navigator.maxTouchPoints>0;return t||i&&this.isSmallScreen}setupOrientationListener(){const e=()=>{if(!this.isMobile)return;const i=window.innerWidth>window.innerHeight?"right":"bottom";this.position!==i&&this.setPosition(i)};e(),window.addEventListener("orientationchange",e),window.addEventListener("resize",e)}setupWindowResizeListener(){const e=()=>{this.detachedWindows.forEach(i=>{this.constrainWindowToBounds(i.panel)})},t=()=>{if(this.panel.classList.contains("maximized"))return;const i=window.innerWidth,n=window.innerHeight;if(this.position==="bottom"){const o=this.panel.offsetHeight,r=n-50;o>r&&(this.panel.style.height=`${r}px`,this.lastHeightBottom=r)}else if(this.position==="right"){const o=this.panel.offsetWidth,r=i-50;o>r&&(this.panel.style.width=`${r}px`,this.lastWidthRight=r)}};window.addEventListener("resize",()=>{this.isSmallScreen?(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")):(this.floatingBtn.style.display="",this.panel.classList.remove("hide-position-toggle")),this.isMobile?this.panel.classList.add("is-mobile"):this.panel.classList.remove("is-mobile"),e(),t()})}constrainWindowToBounds(e){const t=window.innerWidth,i=window.innerHeight,n=e.offsetWidth,o=e.offsetHeight;let r=parseFloat(e.style.left)||e.offsetLeft||0,a=parseFloat(e.style.top)||e.offsetTop||0;const l=n/2,c=o/2;r+n>t+l&&(r=t+l-n),r<-l&&(r=-l),a+o>i+c&&(a=i+c-o),a<-c&&(a=-c),e.style.left=`${r}px`,e.style.top=`${a}px`}setupShell(){this.domElement=document.createElement("div"),this.domElement.id="profiler-shell",this.toggleButton=document.createElement("button"),this.toggleButton.id="profiler-toggle",this.toggleButton.innerHTML=`
<span id="builtin-tabs-container"></span>
<span id="toggle-text">
	<span id="fps-counter">-</span>
	<span class="fps-label">FPS</span>
</span>
<span id="toggle-icon">
	<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-ipad-horizontal-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" /><path d="M9 17h2" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
</span>
`,this.toggleButton.onclick=()=>this.togglePanel(),this.builtinTabsContainer=this.toggleButton.querySelector("#builtin-tabs-container"),this.miniPanel=document.createElement("div"),this.miniPanel.id="profiler-mini-panel",this.miniPanel.className="profiler-mini-panel",this.panel=document.createElement("div"),this.panel.id="profiler-panel";const e=document.createElement("div");e.className="profiler-header",e.addEventListener("wheel",o=>{o.deltaY!==0&&(o.preventDefault(),e.scrollLeft+=o.deltaY*.25)},{passive:!1}),this.tabsContainer=document.createElement("div"),this.tabsContainer.className="profiler-tabs";const t=document.createElement("div");t.className="profiler-controls",this.floatingBtn=document.createElement("button"),this.floatingBtn.id="floating-btn",this.floatingBtn.title="Switch to Right Side",this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.onclick=()=>this.togglePosition(),this.isSmallScreen&&(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")),this.isMobile&&this.panel.classList.add("is-mobile"),this.maximizeBtn=document.createElement("button"),this.maximizeBtn.id="maximize-btn",this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',this.maximizeBtn.onclick=()=>this.toggleMaximize();const i=document.createElement("button");i.id="hide-panel-btn",i.textContent="-",i.onclick=()=>this.togglePanel(),t.append(this.floatingBtn,this.maximizeBtn,i),e.append(this.tabsContainer,t),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="profiler-content-wrapper";const n=document.createElement("div");n.className="panel-resizer",this.panel.append(n,e,this.contentWrapper),this.domElement.append(this.toggleButton,this.miniPanel,this.panel),this.panel.classList.add(`position-${this.position}`),this.position==="right"&&(this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"))}setupResizing(){const e=this.panel.querySelector(".panel-resizer"),t=i=>{this.isResizing=!0,this.panel.classList.add("resizing"),e.setPointerCapture(i.pointerId);const n=i.clientX,o=i.clientY,r=this.panel.offsetHeight,a=this.panel.offsetWidth,l=h=>{if(!this.isResizing)return;h.preventDefault();const u=h.clientX,p=h.clientY;if(this.position==="bottom"){const m=r-(p-o);m>100&&m<window.innerHeight-50&&(this.panel.style.height=`${m}px`)}else if(this.position==="right"){const m=a-(u-n);m>200&&m<window.innerWidth-50&&(this.panel.style.width=`${m}px`)}this.dispatchEvent({type:"resize"})},c=()=>{this.isResizing=!1,this.panel.classList.remove("resizing"),e.removeEventListener("pointermove",l),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c),this.panel.classList.contains("maximized")||(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.saveLayout())};e.addEventListener("pointermove",l),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)};e.addEventListener("pointerdown",t)}toggleMaximize(){this.panel.classList.contains("maximized")?(this.panel.classList.remove("maximized"),this.position==="bottom"?(this.panel.style.height=`${this.lastHeightBottom}px`,this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width=`${this.lastWidthRight}px`),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'):(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.panel.classList.add("maximized"),this.position==="bottom"?(this.panel.style.height="100vh",this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width="100vw"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>'),this.dispatchEvent({type:"resize"})}hide(){this.miniPanel.classList.remove("visible"),this.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")})}show(e){if(this.hide(),e.builtinButton.classList.add("active"),!e.miniContent.firstChild)for(;e.content.firstChild;)e.miniContent.appendChild(e.content.firstChild);e.miniContent.style.display="block",this.miniPanel.classList.add("visible")}addTab(e){this.tabs[e.id]=e,e.originalIndex=this.nextTabOriginalIndex++,e.allowDetach===!1&&e.button.classList.add("no-detach"),e.onVisibilityChange=()=>this.updatePanelSize(),this.setupTabDragAndDrop(e),e.builtin||this.tabsContainer.appendChild(e.button),this.contentWrapper.appendChild(e.content),e.isVisible||(e.button.style.display="none",e.content.style.display="none"),e.builtin&&this.addBuiltinTab(e),this.updatePanelSize(),e.profiler=this}addBuiltinTab(e){const t=document.createElement("button");t.className="builtin-tab-btn",e.icon?t.innerHTML=e.icon:t.textContent=e.button.textContent.charAt(0).toUpperCase(),t.title=e.button.textContent;const i=document.createElement("div");i.className="mini-panel-content",i.style.display="none",e.builtinButton=t,e.miniContent=i,this.miniPanel.appendChild(i),t.onclick=n=>{n.stopPropagation(),i.style.display!=="none"&&i.children.length>0?this.hide():this.show(e)},this.builtinTabsContainer.appendChild(t),e.builtinButton=t,e.miniContent=i,e.isVisible||(t.style.display="none",i.style.display="none",Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(o=>o.style.display!=="none")||(this.builtinTabsContainer.style.display="none"))}removeTab(e){if(!(!e||this.tabs[e.id]===void 0)){if(delete this.tabs[e.id],e.isDetached&&e.detachedWindow){e.detachedWindow.panel&&e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel);const t=this.detachedWindows.indexOf(e.detachedWindow);t!==-1&&this.detachedWindows.splice(t,1)}if(e.builtin?(e.builtinButton&&e.builtinButton.parentNode&&e.builtinButton.parentNode.removeChild(e.builtinButton),e.miniContent&&e.miniContent.parentNode&&e.miniContent.parentNode.removeChild(e.miniContent),Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(i=>i.style.display!=="none")||(this.builtinTabsContainer.style.display="none")):e.button&&e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content&&e.content.parentNode&&e.content.parentNode.removeChild(e.content),this.activeTabId===e.id){this.activeTabId=null;const t=Object.values(this.tabs).filter(i=>!i.isDetached&&i.isVisible);t.length>0?this.setActiveTab(t[0].id):this.updatePanelSize()}else this.updatePanelSize();e.onVisibilityChange=null,e.profiler=null}}updatePanelSize(){Object.values(this.tabs).some(t=>!t.isDetached&&t.isVisible)?(this.panel.classList.remove("no-tabs"),Object.keys(this.tabs).length>0&&(this.position==="bottom"?parseInt(this.panel.style.height)===38&&(this.panel.style.height=`${this.lastHeightBottom}px`):this.position==="right"&&parseInt(this.panel.style.width)===45&&(this.panel.style.width=`${this.lastWidthRight}px`))):(this.panel.classList.add("no-tabs"),this.panel.classList.contains("maximized")&&(this.panel.classList.remove("maximized"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'),this.position==="bottom"?this.panel.style.height="38px":this.position==="right"&&(this.panel.style.width="45px")),this.dispatchEvent({type:"resize"})}setupTabDragAndDrop(e){if(e.button.addEventListener("click",()=>{t||this.setActiveTab(e.id)}),e.allowDetach===!1){e.button.style.cursor="default";return}let t=!1,i,n,o=!1,r=null;const a=10,l=u=>{i=u.clientX,n=u.clientY,t=!1,o=!1,e.button.setPointerCapture(u.pointerId)},c=u=>{const p=u.clientX,m=u.clientY,g=Math.abs(p-i),f=Math.abs(m-n);!t&&(g>a||f>a)&&(t=!0,e.button.style.cursor="grabbing",e.button.style.opacity="0.5",e.button.style.transform="scale(1.05)",r=this.createPreviewWindow(e,p,m),r.style.opacity="0.8"),t&&r&&(o=!0,u.preventDefault(),r.style.left=`${p-200}px`,r.style.top=`${m-20}px`)},h=()=>{if(t&&o&&r){r.parentNode&&r.parentNode.removeChild(r);const u=parseInt(r.style.left)+200,p=parseInt(r.style.top)+20;this.detachTab(e,u,p)}else o||this.setActiveTab(e.id),r&&r.parentNode&&r.parentNode.removeChild(r);e.button.style.opacity="",e.button.style.transform="",e.button.style.cursor="",t=!1,o=!1,r=null,e.button.removeEventListener("pointermove",c),e.button.removeEventListener("pointerup",h),e.button.removeEventListener("pointercancel",h)};e.button.addEventListener("pointerdown",u=>{this.isMobile&&u.pointerType!=="mouse"||(l(u),e.button.addEventListener("pointermove",c),e.button.addEventListener("pointerup",h),e.button.addEventListener("pointercancel",h))}),e.button.style.cursor="grab"}createPreviewWindow(e,t,i){const n=document.createElement("div");n.className="detached-tab-panel",n.style.left=`${t-200}px`,n.style.top=`${i-20}px`,n.style.pointerEvents="none",this.maxZIndex++,n.style.setProperty("z-index",this.maxZIndex,"important");const o=document.createElement("div");o.className="detached-tab-header";const r=document.createElement("span");r.textContent=e.button.textContent.replace("⇱","").trim(),o.appendChild(r);const a=document.createElement("div");a.className="detached-header-controls";const l=document.createElement("button");l.className="detached-reattach-btn",l.innerHTML="↩",a.appendChild(l),o.appendChild(a);const c=document.createElement("div");c.className="detached-tab-content";const h=document.createElement("div");return h.className="detached-tab-resizer",n.appendChild(h),n.appendChild(o),n.appendChild(c),document.body.appendChild(n),n}detachTab(e,t,i){if(e.isDetached||e.allowDetach===!1)return;const o=Array.from(this.tabsContainer.children).map(c=>Object.keys(this.tabs).find(h=>this.tabs[h].button===c)).filter(c=>c!==void 0),r=o.indexOf(e.id);let a=null;if(this.activeTabId===e.id){e.setActive(!1);const c=o.filter(h=>h!==e.id&&!this.tabs[h].isDetached&&this.tabs[h].isVisible);if(c.length>0){for(let h=r-1;h>=0;h--)if(c.includes(o[h])){a=o[h];break}if(!a){for(let h=r+1;h<o.length;h++)if(c.includes(o[h])){a=o[h];break}}a||(a=c[0])}}e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content.parentNode&&e.content.parentNode.removeChild(e.content);const l=this.createDetachedWindow(e,t,i);this.detachedWindows.push(l),e.isDetached=!0,e.detachedWindow=l,a?this.setActiveTab(a):this.activeTabId===e.id&&(this.activeTabId=null),this.updatePanelSize(),this.saveLayout()}createDetachedWindow(e,t,i){const n=window.innerWidth,o=window.innerHeight,r=400,a=300;let l=t-200,c=i-20;l+r>n&&(l=n-r),l<0&&(l=0),c+a>o&&(c=o-a),c<0&&(c=0);const h=document.createElement("div");h.className="detached-tab-panel",h.style.left=`${l}px`,h.style.top=`${c}px`,this.panel.classList.contains("visible")||(h.style.opacity="0",h.style.visibility="hidden",h.style.pointerEvents="none"),e.isVisible||(h.style.display="none");const u=document.createElement("div");u.className="detached-tab-header";const p=document.createElement("span");p.textContent=e.button.textContent.replace("⇱","").trim(),u.appendChild(p);const m=document.createElement("div");m.className="detached-header-controls";const g=document.createElement("button");g.className="detached-reattach-btn",g.innerHTML="↩",g.title="Reattach to main panel",g.onclick=()=>this.reattachTab(e),m.appendChild(g),u.appendChild(m);const f=document.createElement("div");f.className="detached-tab-content",f.appendChild(e.content),e.content.style.display="block",e.content.classList.add("active");const C=document.createElement("div");C.className="detached-tab-resizer-top";const _=document.createElement("div");_.className="detached-tab-resizer-right";const T=document.createElement("div");T.className="detached-tab-resizer-bottom";const L=document.createElement("div");L.className="detached-tab-resizer-left";const z=document.createElement("div");return z.className="detached-tab-resizer",h.appendChild(C),h.appendChild(_),h.appendChild(T),h.appendChild(L),h.appendChild(z),h.appendChild(u),h.appendChild(f),document.body.appendChild(h),this.setupDetachedWindowDrag(h,u,e),this.setupDetachedWindowResize(h,C,_,T,L,z),h.style.setProperty("z-index",this.maxZIndex,"important"),{panel:h,tab:e}}bringWindowToFront(e){this.maxZIndex++,e.style.setProperty("z-index",this.maxZIndex,"important")}setupDetachedWindowDrag(e,t,i){let n=!1,o,r,a,l;e.addEventListener("pointerdown",()=>{this.bringWindowToFront(e)});const c=p=>{if(p.target.classList.contains("detached-reattach-btn"))return;this.bringWindowToFront(e),n=!0,t.style.cursor="grabbing",t.setPointerCapture(p.pointerId),o=p.clientX,r=p.clientY;const m=e.getBoundingClientRect();a=m.left,l=m.top},h=p=>{if(!n)return;p.preventDefault();const m=p.clientX,g=p.clientY,f=m-o,C=g-r;let _=a+f,T=l+C;const L=window.innerWidth,z=window.innerHeight,U=e.offsetWidth,M=e.offsetHeight,te=U/2,ie=M/2;_+U>L+te&&(_=L+te-U),_<-te&&(_=-te),T+M>z+ie&&(T=z+ie-M),T<-ie&&(T=-ie),e.style.left=`${_}px`,e.style.top=`${T}px`;const G=this.panel.getBoundingClientRect();m>=G.left&&m<=G.right&&g>=G.top&&g<=G.bottom?(e.style.opacity="0.5",this.panel.style.outline="2px solid var(--accent-color)"):(e.style.opacity="",this.panel.style.outline="")},u=p=>{if(!n)return;n=!1,t.style.cursor="",e.style.opacity="",this.panel.style.outline="";const m=p.clientX,g=p.clientY;if(m!==void 0&&g!==void 0){const f=this.panel.getBoundingClientRect();m>=f.left&&m<=f.right&&g>=f.top&&g<=f.bottom&&i?this.reattachTab(i):this.saveLayout()}t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",u),t.removeEventListener("pointercancel",u)};t.addEventListener("pointerdown",p=>{c(p),t.addEventListener("pointermove",h),t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}),t.style.cursor="grab"}setupDetachedWindowResize(e,t,i,n,o,r){const c=(h,u)=>{let p=!1,m,g,f,C,_,T;const L=M=>{M.preventDefault(),M.stopPropagation(),p=!0,this.bringWindowToFront(e),h.setPointerCapture(M.pointerId),m=M.clientX,g=M.clientY,f=e.offsetWidth,C=e.offsetHeight,_=e.offsetLeft,T=e.offsetTop},z=M=>{if(!p)return;M.preventDefault();const te=M.clientX,ie=M.clientY,G=te-m,pe=ie-g,Ct=window.innerWidth,St=window.innerHeight;if(u==="right"||u==="corner"){const N=f+G,K=Ct-_;N>=250&&N<=K&&(e.style.width=`${N}px`)}if(u==="bottom"||u==="corner"){const N=C+pe,K=St-T;N>=150&&N<=K&&(e.style.height=`${N}px`)}if(u==="left"){const N=f-G,K=_+f-250;if(N>=250){const Q=_+G;Q>=0&&Q<=K&&(e.style.width=`${N}px`,e.style.left=`${Q}px`)}}if(u==="top"){const N=C-pe,K=T+C-150;if(N>=150){const Q=T+pe;Q>=0&&Q<=K&&(e.style.height=`${N}px`,e.style.top=`${Q}px`)}}},U=()=>{p=!1,h.removeEventListener("pointermove",z),h.removeEventListener("pointerup",U),h.removeEventListener("pointercancel",U),this.saveLayout()};h.addEventListener("pointerdown",M=>{L(M),h.addEventListener("pointermove",z),h.addEventListener("pointerup",U),h.addEventListener("pointercancel",U)})};c(t,"top"),c(i,"right"),c(n,"bottom"),c(o,"left"),c(r,"corner")}reattachTab(e){if(!e.isDetached)return;if(e.detachedWindow){const r=this.detachedWindows.indexOf(e.detachedWindow);r>-1&&this.detachedWindows.splice(r,1),e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel),e.detachedWindow=null}e.isDetached=!1;const i=Object.values(this.tabs).filter(r=>r.originalIndex!==void 0&&r.isVisible).sort((r,a)=>r.originalIndex-a.originalIndex),n=Array.from(this.tabsContainer.children);let o=0;for(const r of i){if(r.id===e.id)break;r.isDetached||o++}o>=n.length||n.length===0?this.tabsContainer.appendChild(e.button):this.tabsContainer.insertBefore(e.button,n[o]),this.contentWrapper.appendChild(e.content),this.setActiveTab(e.id),this.updatePanelSize(),this.saveLayout()}setActiveTab(e){this.activeTabId&&this.tabs[this.activeTabId]&&!this.tabs[this.activeTabId].isDetached&&this.tabs[this.activeTabId].setActive(!1),this.activeTabId=e,this.tabs[e]&&this.tabs[e].setActive(!0),this.saveLayout()}togglePanel(){this.panel.classList.toggle("visible"),this.toggleButton.classList.toggle("panel-open"),this.miniPanel.classList.toggle("panel-open");const e=this.panel.classList.contains("visible");this.detachedWindows.forEach(t=>{e?(t.panel.style.opacity="",t.panel.style.visibility="",t.panel.style.pointerEvents=""):(t.panel.style.opacity="0",t.panel.style.visibility="hidden",t.panel.style.pointerEvents="none")}),this.dispatchEvent({type:"resize"}),this.saveLayout()}togglePosition(){const e=this.position==="bottom"?"right":"bottom";this.setPosition(e)}setPosition(e){if(this.position===e)return;this.panel.style.transition="none";const t=this.panel.classList.contains("maximized");e==="right"?(this.position="right",this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",t?(this.panel.style.width="100vw",this.panel.style.height="100%"):(this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%")):(this.position="bottom",this.floatingBtn.classList.remove("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.title="Switch to Right Side",this.panel.classList.remove("position-right"),this.panel.classList.add("position-bottom"),this.toggleButton.classList.remove("position-right"),this.miniPanel.classList.remove("position-right"),this.panel.style.top="",this.panel.style.right="",this.panel.style.bottom="0",this.panel.style.left="0",t?(this.panel.style.width="100%",this.panel.style.height="100vh"):(this.panel.style.width="100%",this.panel.style.height=`${this.lastHeightBottom}px`)),setTimeout(()=>{this.panel.style.transition=""},50),this.updatePanelSize(),this.saveLayout()}saveLayout(){if(this.isLoadingLayout)return;const e={position:this.position,lastHeightBottom:this.lastHeightBottom,lastWidthRight:this.lastWidthRight,activeTabId:this.activeTabId,detachedTabs:[],isVisible:this.panel.classList.contains("visible")};this.detachedWindows.forEach(t=>{const i=t.tab,n=t.panel,o=parseFloat(n.style.left)||n.offsetLeft||0,r=parseFloat(n.style.top)||n.offsetTop||0,a=n.offsetWidth,l=n.offsetHeight;e.detachedTabs.push({tabId:i.id,originalIndex:i.originalIndex!==void 0?i.originalIndex:0,left:o,top:r,width:a,height:l})});try{de("layout",e)}catch(t){console.warn("Failed to save profiler layout:",t)}}loadLayout(){this.isLoadingLayout=!0;try{const e=he("layout");if(Object.keys(e).length===0)return;if(e.detachedTabs&&e.detachedTabs.length>0){const n=window.innerWidth,o=window.innerHeight;e.detachedTabs=e.detachedTabs.map(r=>{let{left:a,top:l,width:c,height:h}=r;c>n&&(c=n-100),h>o&&(h=o-100);const u=c/2,p=h/2;return a+c>n+u&&(a=n+u-c),a<-u&&(a=-u),l+h>o+p&&(l=o+p-h),l<-p&&(l=-p),{...r,left:a,top:l,width:c,height:h}})}e.position&&(this.position=e.position),e.lastHeightBottom&&(this.lastHeightBottom=e.lastHeightBottom),e.lastWidthRight&&(this.lastWidthRight=e.lastWidthRight);const t=window.innerWidth,i=window.innerHeight;this.lastHeightBottom>i-50&&(this.lastHeightBottom=i-50),this.lastWidthRight>t-50&&(this.lastWidthRight=t-50),this.position==="right"?(this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%"):this.panel.style.height=`${this.lastHeightBottom}px`,e.isVisible&&(this.panel.classList.add("visible"),this.toggleButton.classList.add("panel-open")),e.activeTabId&&this.setActiveTab(e.activeTabId),e.detachedTabs&&e.detachedTabs.length>0&&(this.pendingDetachedTabs=e.detachedTabs,this.restoreDetachedTabs()),this.updatePanelSize(),this.panel.classList.contains("visible")&&this.miniPanel.classList.add("panel-open")}catch(e){console.warn("Failed to load profiler layout:",e)}finally{this.isLoadingLayout=!1}}restoreDetachedTabs(){if(!this.pendingDetachedTabs||this.pendingDetachedTabs.length===0)return;if(this.pendingDetachedTabs.forEach(t=>{const i=this.tabs[t.tabId];if(!i||i.isDetached)return;t.originalIndex!==void 0&&(i.originalIndex=t.originalIndex),i.button.parentNode&&i.button.parentNode.removeChild(i.button),i.content.parentNode&&i.content.parentNode.removeChild(i.content);const n=this.createDetachedWindow(i,0,0);n.panel.style.left=`${t.left}px`,n.panel.style.top=`${t.top}px`,n.panel.style.width=`${t.width}px`,n.panel.style.height=`${t.height}px`,this.constrainWindowToBounds(n.panel),this.detachedWindows.push(n),i.isDetached=!0,i.detachedWindow=n}),this.pendingDetachedTabs=null,this.detachedWindows.forEach(t=>{const i=parseInt(getComputedStyle(t.panel).zIndex)||0;i>this.maxZIndex&&(this.maxZIndex=i)}),!this.activeTabId||!this.tabs[this.activeTabId]||this.tabs[this.activeTabId].isDetached||!this.tabs[this.activeTabId].isVisible){const i=Object.keys(this.tabs).filter(n=>!this.tabs[n].isDetached&&this.tabs[n].isVisible);if(i.length>0){const o=Array.from(this.tabsContainer.children).map(r=>Object.keys(this.tabs).find(a=>this.tabs[a].button===r)).filter(r=>r!==void 0&&!this.tabs[r].isDetached&&this.tabs[r].isVisible);this.setActiveTab(o[0]||i[0])}else this.activeTabId=null}this.updatePanelSize()}}class re extends Ae{constructor(e,t={}){super(),this.id=e.toLowerCase(),this.button=document.createElement("button"),this.button.className="tab-btn",this.button.textContent=e,this.content=document.createElement("div"),this.content.id=`${this.id}-content`,this.content.className="profiler-content",this._isActive=!1,this.isVisible=!0,this.isDetached=!1,this.detachedWindow=null,this.allowDetach=t.allowDetach!==void 0?t.allowDetach:!0,this.builtin=t.builtin!==void 0?t.builtin:!1,this.icon=t.icon||null,this.builtinButton=null,this.miniContent=null,this.profiler=null,this.onVisibilityChange=null}get inspector(){return this.profiler.inspector}get isActive(){return this.profiler&&this.profiler.panel.classList.contains("visible")?this.isDetached||this._isActive:!1}set isActive(e){this._isActive=e}init(){}update(){}setActive(e){this.button.classList.toggle("active",e),this.content.classList.toggle("active",e),this.isActive=e}show(){this.content.style.display="",this.button.style.display="",this.isVisible=!0,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display=""),this.onVisibilityChange&&this.onVisibilityChange(),this.showBuiltin()}hide(){this.content.style.display="none",this.button.style.display="none",this.isVisible=!1,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display="none"),this.onVisibilityChange&&this.onVisibilityChange(),this.hideBuiltin()}showBuiltin(){if(this.builtin&&(this.profiler&&this.profiler.builtinTabsContainer&&(this.profiler.builtinTabsContainer.style.display=""),this.builtinButton&&(this.builtinButton.style.display=""),this.miniContent&&this.profiler)){if(this.profiler.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")}),this.builtinButton&&this.builtinButton.classList.add("active"),!this.miniContent.firstChild)for(;this.content.firstChild;)this.miniContent.appendChild(this.content.firstChild);this.miniContent.style.display="block",this.profiler.miniPanel.classList.add("visible")}}hideBuiltin(){if(this.builtin){if(this.builtinButton&&(this.builtinButton.style.display="none"),this.miniContent&&(this.miniContent.style.display="none",this.miniContent.firstChild))for(;this.miniContent.firstChild;)this.content.appendChild(this.miniContent.firstChild);this.builtinButton&&this.builtinButton.classList.remove("active"),this.profiler&&(Array.from(this.profiler.miniPanel.querySelectorAll(".mini-panel-content")).some(i=>i.style.display!=="none")||this.profiler.miniPanel.classList.remove("visible"),Array.from(this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(i=>i.style.display!=="none")||(this.profiler.builtinTabsContainer.style.display="none"))}}}class Te{constructor(...e){this.headers=e,this.children=[],this.domElement=document.createElement("div"),this.domElement.className="list-container",this.domElement.style.padding="10px",this.id=`list-${Math.random().toString(36).slice(2,11)}`,this.domElement.dataset.listId=this.id,this.gridStyleElement=document.createElement("style"),this.domElement.appendChild(this.gridStyleElement);const t=document.createElement("div");t.className="list-header",this.headers.forEach(i=>{const n=document.createElement("div");n.className="list-header-cell",n.textContent=i,t.appendChild(n)}),this.domElement.appendChild(t)}setGridStyle(e){this.gridStyleElement.textContent=`
[data-list-id="${this.id}"] > .list-header,
[data-list-id="${this.id}"] .list-item-row {
	grid-template-columns: ${e};
}
`}add(e){e.parent!==null&&e.parent.remove(e),e.domElement.classList.add("header-wrapper","section-start"),e.parent=this,this.children.push(e),this.domElement.appendChild(e.domElement)}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.domElement.removeChild(e.domElement),e.parent=null),this}}class Ue{constructor(e=512){this.maxPoints=e,this.lines={},this.limit=0,this.limitIndex=0,this.domElement=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.domElement.setAttribute("class","graph-svg")}addLine(e,t){const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("class","graph-path"),i.style.stroke=t,i.style.fill=t,this.domElement.appendChild(i),this.lines[e]={path:i,color:t,points:[]}}addPoint(e,t){const i=this.lines[e];i&&(i.points.push(t),i.points.length>this.maxPoints&&i.points.shift(),t>this.limit&&(this.limit=t,this.limitIndex=0))}resetLimit(){this.limit=0,this.limitIndex=0}update(){const e=this.domElement.clientWidth,t=this.domElement.clientHeight;if(e===0)return;const i=e/(this.maxPoints-1);for(const n in this.lines){const o=this.lines[n];let r=`M 0,${t}`;for(let l=0;l<o.points.length;l++){const c=l*i,h=t-o.points[l]/this.limit*t;r+=` L ${c},${h}`}r+=` L ${(o.points.length-1)*i},${t} Z`;const a=e-(o.points.length-1)*i;o.path.setAttribute("transform",`translate(${a}, 0)`),o.path.setAttribute("d",r)}this.limitIndex++>this.maxPoints&&this.resetLimit()}}class y{constructor(...e){this.children=[],this.isOpen=!0,this.childrenContainer=null,this.parent=null,this.domElement=document.createElement("div"),this.domElement.className="list-item-wrapper",this.itemRow=document.createElement("div"),this.itemRow.className="list-item-row",this.userData={},this.data=e,this.data.forEach(t=>{const i=document.createElement("div");i.className="list-item-cell",t instanceof HTMLElement?i.appendChild(t):i.append(String(t)),this.itemRow.appendChild(i)}),this.domElement.appendChild(this.itemRow),this.onItemClick=this.onItemClick.bind(this)}onItemClick(e){e.target.closest("button, a, input, label")||this.toggle()}add(e,t=this.children.length){return e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.splice(t,0,e),this.itemRow.classList.add("collapsible"),this.childrenContainer||(this.childrenContainer=document.createElement("div"),this.childrenContainer.className="list-children-container",this.childrenContainer.classList.toggle("closed",!this.isOpen),this.domElement.appendChild(this.childrenContainer),this.itemRow.addEventListener("click",this.onItemClick)),this.childrenContainer.insertBefore(e.domElement,this.childrenContainer.children[t]||null),this.updateToggler(),this}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.childrenContainer.removeChild(e.domElement),e.parent=null,this.children.length===0&&(this.itemRow.classList.remove("collapsible"),this.itemRow.removeEventListener("click",this.onItemClick),this.childrenContainer.remove(),this.childrenContainer=null),this.updateToggler()),this}updateToggler(){const e=this.itemRow.querySelector(".list-item-cell:first-child");let t=this.itemRow.querySelector(".item-toggler");this.children.length>0?(t||(t=document.createElement("span"),t.className="item-toggler",e.prepend(t)),this.isOpen&&this.itemRow.classList.add("open")):t&&t.remove()}toggle(){return this.isOpen=!this.isOpen,this.itemRow.classList.toggle("open",this.isOpen),this.childrenContainer&&this.childrenContainer.classList.toggle("closed",!this.isOpen),this}close(){return this.isOpen&&this.toggle(),this}}function b(d=null){const e=document.createElement("span");return e.className="value",d!==null&&(e.id=d),e}function x(d,e){const t=d instanceof HTMLElement?d:document.getElementById(d);t&&t.textContent!==e&&(t.textContent=e)}function fm(d){const e=d.lastIndexOf("/");if(e===-1)return{path:"",name:d.trim()};const t=d.substring(0,e).trim(),i=d.substring(e+1).trim();return{path:t,name:i}}function bm(d){return d.replace(/([a-z0-9])([A-Z])/g,"$1 $2").trim()}function $(d,e=2){if(d===0)return"0 Bytes";const t=1024,i=e<0?0:e,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(d)/Math.log(t));return parseFloat((d/Math.pow(t,o)).toFixed(i))+" "+n[o]}class xm extends re{constructor(e={}){super("Performance",e);const t=new Te("Name","CPU","GPU","Total");t.setGridStyle("minmax(200px, 2fr) 80px 80px 80px"),t.domElement.style.minWidth="600px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const n=document.createElement("div");n.className="graph-container";const o=new Ue;o.addLine("fps","var( --color-fps )"),n.append(o.domElement);const r=new y("Graph Stats",b(),b(),b("graph-fps-counter"));t.add(r);const a=new y(n);a.itemRow.childNodes[0].style.gridColumn="1 / -1",r.add(a);const l=new y("Frame Stats",b(),b(),b());t.add(l);const c=new y("Miscellaneous & Idle",b(),b(),b());c.domElement.firstChild.style.backgroundColor="#00ff0b1a",c.domElement.firstChild.classList.add("no-hover"),l.add(c),this.notInUse=new Map,this.frameStats=l,this.graphStats=r,this.graph=o,this.miscellaneous=c,this.currentRender=null,this.currentItem=null,this.frameItems=new Map}resolveStats(e,t){const i=e.getStatsData(t.cid);let n=i.item;if(n===void 0)n=new y(b(),b(),b(),b()),t.name?t.isComputeStats===!0&&(t.name=`${t.name} [ Compute ]`):t.name=`Unnamed ${t.cid}`,n.userData.name=t.name,this.currentItem.add(n),i.item=n;else{n.userData.name=t.name,this.notInUse.has(t.cid)&&(n.domElement.firstElementChild.classList.remove("alert"),this.notInUse.delete(t.cid));const a=t.parent.children.indexOf(t);(n.parent===null||n.parent.children.indexOf(n)!==a)&&this.currentItem.add(n,a)}let o=n.userData.name;t.isComputeStats&&(o+=" [ Compute ]"),x(n.data[0],o),x(n.data[1],i.cpu.toFixed(2)),x(n.data[2],t.gpuNotAvailable===!0?"-":i.gpu.toFixed(2)),x(n.data[3],i.total.toFixed(2));const r=this.currentItem;this.currentItem=n;for(const a of t.children)this.resolveStats(e,a);this.currentItem=r,this.frameItems.set(t.cid,n)}updateGraph(e){this.graph.addPoint("fps",e.fps),this.graph.update()}addNotInUse(e,t){t.domElement.firstElementChild.classList.add("alert"),this.notInUse.set(e,{item:t,time:performance.now()}),this.updateNotInUse(e)}updateNotInUse(e){const{item:t,time:i}=this.notInUse.get(e),n=performance.now(),r=5-Math.floor((n-i)/1e3);if(r>=0){const a="*".repeat(Math.max(0,r)),l=t.domElement.querySelector(".list-item-cell .value");x(l,t.userData.name+" (not in use) "+a)}else t.domElement.firstElementChild.classList.remove("alert"),t.parent.remove(t),this.notInUse.delete(e)}updateText(e,t){const i=new Map(this.frameItems);this.frameItems.clear(),this.currentItem=this.frameStats;for(const n of t.children)this.resolveStats(e,n);for(const[n,o]of i)this.frameItems.has(n)||(this.addNotInUse(n,o),i.delete(n));for(const n of this.notInUse.keys())this.updateNotInUse(n);x("graph-fps-counter",e.fps.toFixed()+" FPS"),x(this.frameStats.data[1],t.cpu.toFixed(2)),x(this.frameStats.data[2],t.gpu.toFixed(2)),x(this.frameStats.data[3],t.total.toFixed(2)),x(this.miscellaneous.data[1],t.miscellaneous.toFixed(2)),x(this.miscellaneous.data[2],"-"),x(this.miscellaneous.data[3],t.miscellaneous.toFixed(2)),this.currentItem=null}}class ym extends re{constructor(e={}){super("Memory",e);const t=new Te("Name","Count","Size");t.setGridStyle("minmax(200px, 2fr) 60px 100px"),t.domElement.style.minWidth="300px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const n=document.createElement("div");n.className="graph-container";const o=new Ue;o.addLine("total","var( --color-yellow )"),n.append(o.domElement);const r=new y("Graph Stats","","");t.add(r);const a=new y(n);a.itemRow.childNodes[0].style.gridColumn="1 / -1",r.add(a),this.memoryStats=new y("Renderer Info","",b()),this.memoryStats.domElement.firstChild.classList.add("no-hover"),t.add(this.memoryStats),this.attributes=new y("Attributes",b(),b()),this.memoryStats.add(this.attributes),this.geometries=new y("Geometries",b(),"N/A"),this.memoryStats.add(this.geometries),this.indexAttributes=new y("Index Attributes",b(),b()),this.memoryStats.add(this.indexAttributes),this.indirectStorageAttributes=new y("Indirect Storage Attributes",b(),b()),this.memoryStats.add(this.indirectStorageAttributes),this.programs=new y("Programs",b(),b()),this.memoryStats.add(this.programs),this.readbackBuffers=new y("Readback Buffers",b(),b()),this.memoryStats.add(this.readbackBuffers),this.renderTargets=new y("Render Targets",b(),"N/A"),this.memoryStats.add(this.renderTargets),this.storageAttributes=new y("Storage Attributes",b(),b()),this.memoryStats.add(this.storageAttributes),this.textures=new y("Textures",b(),b()),this.memoryStats.add(this.textures),this.graph=o}updateGraph(e){const t=e.getRenderer();if(!t)return;const i=t.info.memory;this.graph.addPoint("total",i.total),this.graph.limit===0&&(this.graph.limit=1),this.graph.update()}updateText(e){const t=e.getRenderer();if(!t)return;const i=t.info.memory;x(this.memoryStats.data[2],$(i.total)),x(this.attributes.data[1],i.attributes.toString()),x(this.attributes.data[2],$(i.attributesSize)),x(this.geometries.data[1],i.geometries.toString()),x(this.indexAttributes.data[1],i.indexAttributes.toString()),x(this.indexAttributes.data[2],$(i.indexAttributesSize)),x(this.indirectStorageAttributes.data[1],i.indirectStorageAttributes.toString()),x(this.indirectStorageAttributes.data[2],$(i.indirectStorageAttributesSize)),x(this.programs.data[1],i.programs.toString()),x(this.programs.data[2],$(i.programsSize)),x(this.readbackBuffers.data[1],i.readbackBuffers.toString()),x(this.readbackBuffers.data[2],$(i.readbackBuffersSize)),x(this.renderTargets.data[1],i.renderTargets.toString()),x(this.storageAttributes.data[1],i.storageAttributes.toString()),x(this.storageAttributes.data[2],$(i.storageAttributesSize)),x(this.textures.data[1],i.textures.toString()),x(this.textures.data[2],$(i.texturesSize))}}class wm extends re{constructor(e={}){super("Console",e),this.filters={info:!0,warn:!0,error:!0},this.filterText="",this.buildHeader(),this.logContainer=document.createElement("div"),this.logContainer.id="console-log",this.content.appendChild(this.logContainer)}buildHeader(){const e=document.createElement("div");e.className="console-header";const t=document.createElement("input");t.type="text",t.className="console-filter-input",t.placeholder="Filter...",t.addEventListener("input",o=>{this.filterText=o.target.value.toLowerCase(),this.applyFilters()});const i=document.createElement("button");i.className="console-copy-button",i.title="Copy all",i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',i.addEventListener("click",()=>this.copyAll(i));const n=document.createElement("div");n.className="console-buttons-group",Object.keys(this.filters).forEach(o=>{const r=document.createElement("label");r.className="custom-checkbox",r.style.color=`var(--${o==="info"?"text-primary":"color-"+(o==="warn"?"yellow":"red")})`;const a=document.createElement("input");a.type="checkbox",a.checked=this.filters[o],a.dataset.type=o;const l=document.createElement("span");l.className="checkmark",r.appendChild(a),r.appendChild(l),r.append(o.charAt(0).toUpperCase()+o.slice(1)),n.appendChild(r)}),n.addEventListener("change",o=>{const r=o.target.dataset.type;r in this.filters&&(this.filters[r]=o.target.checked,this.applyFilters())}),n.appendChild(i),e.appendChild(t),e.appendChild(n),this.content.appendChild(e)}applyFilters(){this.logContainer.querySelectorAll(".log-message").forEach(t=>{const i=t.dataset.type,n=t.dataset.rawText.toLowerCase(),o=this.filters[i],r=n.includes(this.filterText);t.classList.toggle("hidden",!(o&&r))})}copyAll(e){const i=this.logContainer.ownerDocument.defaultView.getSelection(),n=i.toString(),o=n&&this.logContainer.contains(i.anchorNode);let r;if(o)r=n;else{const a=this.logContainer.querySelectorAll(".log-message:not(.hidden)");r=Array.from(a).map(l=>l.dataset.rawText).join(`
`)}navigator.clipboard.writeText(r),e.classList.add("copied"),setTimeout(()=>e.classList.remove("copied"),350)}_getIcon(e,t){let i;return t==="tip"?i="💭":t==="tsl"?i="✨":t==="webgpurenderer"?i="🎨":e==="warn"?i="⚠️":e==="error"?i="🔴":e==="info"&&(i="ℹ️"),i}_formatMessage(e,t){const i=document.createDocumentFragment(),n=t.match(/^([\w\.]+:\s)/);let o=t;if(n){const a=n[0],l=a.slice(0,-2).split("."),c=(l.length>1?l[l.length-1]:l[0])+":",h=this._getIcon(e,c.split(":")[0].toLowerCase());i.appendChild(document.createTextNode(h+" "));const u=document.createElement("span");u.className="log-prefix",u.textContent=c,i.appendChild(u),o=t.substring(a.length)}const r=o.split(/(".*?"|'.*?'|`.*?`)/g).map(a=>a.trim()).filter(Boolean);return r.forEach((a,l)=>{if(/^("|'|`)/.test(a)){const c=document.createElement("span");c.className="log-code",c.textContent=a.slice(1,-1),i.appendChild(c)}else l>0&&(a=" "+a),l<r.length-1&&(a+=" "),i.appendChild(document.createTextNode(a))}),i}addMessage(e,t){const i=document.createElement("div");i.className=`log-message ${e}`,i.dataset.type=e,i.dataset.rawText=t,i.appendChild(this._formatMessage(e,t));const n=this.filters[e],o=t.toLowerCase().includes(this.filterText);i.classList.toggle("hidden",!(n&&o)),this.logContainer.appendChild(i),this.logContainer.scrollTop=this.logContainer.scrollHeight,this.logContainer.children.length>200&&this.logContainer.removeChild(this.logContainer.firstChild)}}class ee extends Ae{constructor(){super(),this.domElement=document.createElement("div"),this.domElement.className="param-control",this._onChangeFunction=null,this.addEventListener("change",e=>{requestAnimationFrame(()=>{this._onChangeFunction&&this._onChangeFunction(e.value)})})}setValue(){return this.dispatchChange(),this}getValue(){return null}dispatchChange(){this.dispatchEvent({type:"change",value:this.getValue()})}onChange(e){return this._onChangeFunction=e,this}}class wt extends ee{constructor({value:e=0,step:t=.1,min:i=-1/0,max:n=1/0}){super(),this.input=document.createElement("input"),this.input.type="number",this.input.value=e,this.input.step=t,this.input.min=i,this.input.max=n,this.input.addEventListener("change",this._onChangeValue.bind(this)),this.domElement.appendChild(this.input),this.addDragHandler()}_onChangeValue(){const e=parseFloat(this.input.value),t=parseFloat(this.input.min),i=parseFloat(this.input.max);e>i?this.input.value=i:e<t?this.input.value=t:isNaN(e)&&(this.input.value=t),this.dispatchChange()}addDragHandler(){let e=!1,t,i;this.input.addEventListener("mousedown",n=>{e=!0,t=n.clientY,i=parseFloat(this.input.value),document.body.style.cursor="ns-resize"}),document.addEventListener("mousemove",n=>{if(e){const o=t-n.clientY,r=parseFloat(this.input.step)||1,a=parseFloat(this.input.min),l=parseFloat(this.input.max);let c=r;!isNaN(l)&&isFinite(a)&&(c=(l-a)/100);const h=o*c;let u=i+h;u=Math.max(a,Math.min(u,l));const p=(String(r).split(".")[1]||[]).length;this.input.value=u.toFixed(p),this.input.dispatchEvent(new Event("input")),this.dispatchChange()}}),document.addEventListener("mouseup",()=>{e&&(e=!1,document.body.style.cursor="default")})}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return parseFloat(this.input.value)}}class vm extends ee{constructor({value:e=!1}){super();const t=document.createElement("label");t.className="custom-checkbox";const i=document.createElement("input");i.type="checkbox",i.checked=e,this.checkbox=i;const n=document.createElement("span");n.className="checkmark",t.appendChild(i),t.appendChild(n),this.domElement.appendChild(t),i.addEventListener("change",()=>{this.dispatchChange()})}setValue(e){return this.checkbox.checked=e,super.setValue(e)}getValue(){return this.checkbox.checked}}class _m extends ee{constructor({value:e=0,min:t=0,max:i=1,step:n=.01}){super(),this.slider=document.createElement("input"),this.slider.type="range",this.slider.min=t,this.slider.max=i,this.slider.step=n;const o=new wt({value:e,min:t,max:i,step:n});this.numberInput=o.input,this.numberInput.style.flexBasis="80px",this.numberInput.style.flexShrink="0",this.slider.value=e,this.domElement.append(this.slider,this.numberInput),this.slider.addEventListener("input",()=>{this.numberInput.value=this.slider.value,this.dispatchChange()}),o.addEventListener("change",()=>{this.slider.value=parseFloat(this.numberInput.value),this.dispatchChange()})}setValue(e){return this.slider.value=e,this.numberInput.value=e,super.setValue(e)}getValue(){return parseFloat(this.slider.value)}step(e){return this.slider.step=e,this.numberInput.step=e,this}}class Tm extends ee{constructor({options:e=[],value:t=""}){super();const i=document.createElement("select"),n=(o,r)=>{const a=document.createElement("option");return a.value=o,a.textContent=o,r==t&&(a.selected=!0),i.appendChild(a),a};Array.isArray(e)?e.forEach(o=>n(o,o)):Object.entries(e).forEach(([o,r])=>n(o,r)),this.domElement.appendChild(i),i.addEventListener("change",()=>{this.dispatchChange()}),this.options=e,this.select=i}getValue(){const e=this.options;return Array.isArray(e)?e[this.select.selectedIndex]:e[this.select.value]}}class Cm extends ee{constructor({value:e="#ffffff"}){super();const t=document.createElement("input");t.type="color",t.value=this._getColorHex(e),this.colorInput=t,this._value=e,t.addEventListener("input",()=>{const i=t.value;this._value.isColor?this._value.setHex(parseInt(i.slice(1),16)):this._value=i,this.dispatchChange()}),this.domElement.appendChild(t)}_getColorHex(e){return e.isColor&&(e=e.getHex()),typeof e=="number"?e=`#${e.toString(16)}`:e[0]!=="#"&&(e="#"+e),e}getValue(){let e=this._value;return typeof e=="string"&&(e=parseInt(e.slice(1),16)),e}}class Sm extends ee{constructor({text:e="Button",value:t=()=>{}}){super();const i=document.createElement("button");i.textContent=e,i.onclick=t,this.domElement.appendChild(i)}}class km extends ee{constructor({value:e=""}){super();const t=document.createElement("input");t.type="text",t.value=e,this.input=t,t.addEventListener("input",()=>{this.dispatchChange()}),this.domElement.appendChild(t)}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return this.input.value}}class He{constructor(e,t){this.parameters=e,this.name=t,this.paramList=new y(t),this.objects=[]}close(){return this.paramList.close(),this}add(e,t,...i){const o=typeof e[t];let r=null;return typeof i[0]=="object"?r=this.addSelect(e,t,i[0]):o==="number"?i.length>=2?r=this.addSlider(e,t,...i):r=this.addNumber(e,t,...i):o==="boolean"?r=this.addBoolean(e,t):o==="string"?r=this.addString(e,t):o==="function"&&(r=this.addButton(e,t,...i)),r}_addParameter(e,t,i,n){i.name=o=>(n.data[0].textContent=o,i),i.listen=()=>{const o=()=>{const r=i.getValue(),a=e[t];r!==a&&i.setValue(a),requestAnimationFrame(o)};return requestAnimationFrame(o),i},this._registerParameter(e,t,i,n)}_registerParameter(e,t,i,n){this.objects.push({object:e,key:t,editor:i,subItem:n})}addString(e,t){const i=e[t],n=new km({value:i});n.addEventListener("change",({value:l})=>{e[t]=l});const o=b();o.textContent=t;const r=new y(o,n.domElement);return this.paramList.add(r),r.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,n,r),n}addFolder(e){const t=new He(this.parameters,e);return this.paramList.add(t.paramList),t}addBoolean(e,t){const i=e[t],n=new vm({value:i});n.addEventListener("change",({value:l})=>{e[t]=l});const o=b();o.textContent=t;const r=new y(o,n.domElement);this.paramList.add(r);const a=r.domElement.firstChild;return a.classList.add("actionable"),a.addEventListener("click",l=>{if(l.target.closest("label"))return;const c=a.querySelector('input[type="checkbox"]');c&&(c.checked=!c.checked,c.dispatchEvent(new Event("change")))}),this._addParameter(e,t,n,r),n}addSelect(e,t,i){const n=e[t],o=new Tm({options:i,value:n});o.addEventListener("change",({value:c})=>{e[t]=c});const r=b();r.textContent=t;const a=new y(r,o.domElement);return this.paramList.add(a),a.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,o,a),o}addColor(e,t){const i=e[t],n=new Cm({value:i});n.addEventListener("change",({value:l})=>{e[t]=l});const o=b();o.textContent=t;const r=new y(o,n.domElement);return this.paramList.add(r),r.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,n,r),n}addSlider(e,t,i=0,n=1,o=.01){const r=e[t],a=new _m({value:r,min:i,max:n,step:o});a.addEventListener("change",({value:u})=>{e[t]=u});const l=b();l.textContent=t;const c=new y(l,a.domElement);return this.paramList.add(c),c.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,a,c),a}addNumber(e,t,...i){const n=e[t],[o,r]=i,a=new wt({value:n,min:o,max:r});a.addEventListener("change",({value:u})=>{e[t]=u});const l=b();l.textContent=t;const c=new y(l,a.domElement);return this.paramList.add(c),c.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,a,c),a}addButton(e,t){const i=e[t],n=new Sm({text:t,value:i});n.addEventListener("change",({value:a})=>{e[t]=a});const o=new y(n.domElement);return o.itemRow.childNodes[0].style.gridColumn="1 / -1",this.paramList.add(o),o.domElement.firstChild.classList.add("actionable"),n.name=a=>(n.domElement.childNodes[0].textContent=a,n),this._registerParameter(e,t,n,o),n}}class vt extends re{constructor(e={}){super(e.name||"Parameters",e);const t=new Te("Property","Value");t.domElement.classList.add("parameters"),t.setGridStyle(".5fr 1fr"),t.domElement.style.minWidth="300px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i),this.paramList=t,this.groups=[]}createGroup(e){const t=new He(this,e);return this.paramList.add(t.paramList),this.groups.push(t),t}}const Ke="../extensions/extensions.json",Qe=ye.prototype.init;function _t(d){d?ye.prototype.init=async function(){if(this.backend.isWebGLBackend!==!0){const e=this.backend.parameters;this.backend=new Ri(e)}return Qe.call(this)}:ye.prototype.init=Qe}let A=null;function Tt(){if(A!==null)return A;const d=he("settings");return A={forceWebGL:d.forceWebGL!==void 0?d.forceWebGL:!1,captureStackTrace:d.captureStackTrace!==void 0?d.captureStackTrace:!1,activeExtensions:d.activeExtensions!==void 0?d.activeExtensions:{}},A.forceWebGL&&_t(!0),A.captureStackTrace&&(at.captureStackTrace=!0),A}function Be(){de("settings",{forceWebGL:A.forceWebGL,captureStackTrace:A.captureStackTrace,activeExtensions:A.activeExtensions})}Tt();class Em extends vt{constructor(){super({name:"Settings"}),this.extensions={};const e=Tt(),t=this.createGroup("Renderer");t.add(e,"forceWebGL").name("Force WebGL").onChange(i=>{_t(i),Be(),location.reload()}),t.add(e,"captureStackTrace").name("Capture Stack Trace").onChange(i=>{at.captureStackTrace=i,Be(),location.reload()})}init(){const e=this.createGroup("Extensions");this._getExtensions().then(t=>{for(const i of t)i.active=!1,i.loaded=!1,i.tab=null,this.extensions[i.name]=i,i.ui=e.add({[i.name]:!1},i.name).onChange(async n=>{this.setActiveExtension(i.name,n),n?A.activeExtensions[i.name]={name:i.name,url:i.url}:delete A.activeExtensions[i.name],this._updateExtensionUI(i),Be()}),A.activeExtensions[i.name]!==void 0&&i.ui.setValue(!0)})}async setActiveExtension(e,t){const i=this.extensions[e],n=this.inspector;i&&(t?await this._loadExtension(n,i):await this._unloadExtension(n,i))}_updateExtensionUI(e){e.active&&A.activeExtensions[e.name]===void 0?(e.ui.checkbox.checked=!0,e.ui.domElement.style.setProperty("--accent-color","var(--color-green)")):e.ui.domElement.style.removeProperty("--accent-color")}async _unloadExtension(e,t){t.active!==!1&&(e.removeTab(t.tab),t.active=!1,t.loaded=!1,t.tab=null,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionremoved",name:t.name}))}async _loadExtension(e,t){if(t.active===!0)return;t.active=!0;const n=await import(new URL(t.url,new URL(Ke,import.meta.url)).href),o=Object.keys(n),r=n[o[0]],a=new r;e.addTab(a),t.loaded=!0,t.tab=a,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionadded",name:t.name,tab:a})}async _getExtensions(){const e=new URL(Ke,import.meta.url);return await fetch(e).then(i=>i.json())}}const Mm=H(([d,e])=>{const t=D(0);pt(()=>{const{width:a,height:l}=e.value;t.value=a/l});const i=d.sub(.5),o=le(i.x.div(t),i.y).add(.5),r=ae(0,o.x).mul(ae(o.x,1)).mul(ae(0,o.y)).mul(ae(o.y,1));return oe(o,r)});class Bm extends re{constructor(e={}){super("Viewer",e);const t=new Te("Viewer","Name");t.setGridStyle("150px minmax(200px, 2fr)"),t.domElement.style.minWidth="400px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const n=new y("Nodes");t.add(n),this.itemLibrary=new Map,this.folderLibrary=new Map,this.canvasNodes=new Map,this.currentDataList=[],this.nodeList=t,this.nodes=n}getFolder(e){let t=this.folderLibrary.get(e);return t===void 0&&(t=new y(e),this.folderLibrary.set(e,t),this.nodeList.add(t)),t}addNodeItem(e){let t=this.itemLibrary.get(e.id);if(t===void 0){const i=e.name,n=e.canvasTarget.domElement;t=new y(n,i),t.itemRow.children[1].style["justify-content"]="flex-start",this.itemLibrary.set(e.id,t)}return t}getCanvasDataByNode(e,t){let i=this.canvasNodes.get(t);if(i===void 0){const n=document.createElement("canvas"),o=new Di(n);o.setPixelRatio(window.devicePixelRatio),o.setSize(140,140);const r=t.id,{path:a,name:l}=fm(bm(t.getName()||"(unnamed)")),c=t.context({getUV:m=>{const g=Mm(je,m),f=g.xy,C=g.z;return f.mul(C)}});let h=O(oe(c),1);h=bt(h,Le,e.outputColorSpace),h=h.context({inspector:!0});const u=new j;u.outputNode=h;const p=new ze(u);p.name="Viewer - "+l,i={id:r,name:l,path:a,node:t,quad:p,canvasTarget:o,material:u},this.canvasNodes.set(t,i)}return i}update(e){const t=e.getRenderer(),i=e.getNodes();if(i.length>0){if(!t.backend.isWebGPUBackend){e.resolveConsoleOnce("warn","Inspector: Viewer is only available with WebGPU.");return}this.isVisible||this.show()}if(!this.isActive)return;const n=i.map(a=>this.getCanvasDataByNode(t,a)),o=[...this.currentDataList];for(const a of o)if(this.itemLibrary.has(a.id)&&n.indexOf(a)===-1){const l=this.itemLibrary.get(a.id),c=l.parent;c.remove(l),this.folderLibrary.has(c.data[0])&&c.children.length===0&&(c.parent.remove(c),this.folderLibrary.delete(c.data[0])),this.itemLibrary.delete(a.id)}const r={};for(const a of n){const l=this.addNodeItem(a),c=t.getCanvasTarget(),h=a.path;if(h){const p=this.getFolder(h);r[h]===void 0&&(r[h]=0),(p.parent===null||l.parent!==p||p.children.indexOf(l)!==r[h])&&p.add(l),r[h]++}else l.parent||this.nodes.add(l);this.currentDataList=n;const u=q.resetRendererState(t);t.toneMapping=Le,t.outputColorSpace=ti,t.setCanvasTarget(a.canvasTarget),a.quad.render(t),t.setCanvasTarget(c),q.restoreRendererState(t,u)}}}const Je=500,et=60;class Lm extends re{constructor(e={}){super("Timeline",e),this.isRecording=!1,this.frames=[],this.baseTriangles=0,this.currentFrame=null,this.isHierarchicalView=!0,this.callBlocks=new WeakMap,this.fallbackBlocks=[],this.originalBackend=null,this.originalMethods=new Map,this.renderer=null,this.graph=new Ue(Je),this.graph.addLine("fps","var( --color-fps )"),this.graph.addLine("calls","var( --color-call )"),this.graph.addLine("triangles","var( --color-red )");const t=document.createElement("div");t.className="list-scroll-wrapper",this.scrollWrapper=t,this.content.appendChild(t),this.buildHeader(),this.buildUI(),window.addEventListener("resize",()=>{!this.isRecording&&this.frames.length>0&&this.renderSlider()})}buildHeader(){const e=document.createElement("div");e.className="console-header",this.recordButton=document.createElement("button"),this.recordButton.className="console-copy-button",this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.padding="0 10px",this.recordButton.style.lineHeight="24px",this.recordButton.style.display="flex",this.recordButton.style.alignItems="center",this.recordButton.addEventListener("click",()=>this.toggleRecording());const t=document.createElement("button");t.className="console-copy-button",t.title="Clear",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',t.style.padding="0 10px",t.style.lineHeight="24px",t.style.display="flex",t.style.alignItems="center",t.addEventListener("click",()=>this.clear()),this.viewModeButton=document.createElement("button"),this.viewModeButton.className="console-copy-button",this.viewModeButton.title="Toggle View Mode",this.viewModeButton.textContent="Mode: Hierarchy",this.viewModeButton.style.padding="0 10px",this.viewModeButton.style.lineHeight="24px",this.viewModeButton.addEventListener("click",()=>{this.isHierarchicalView=!this.isHierarchicalView,this.viewModeButton.textContent=this.isHierarchicalView?"Mode: Hierarchy":"Mode: Counts",this.selectedFrameIndex!==void 0&&this.selectedFrameIndex!==-1&&this.selectFrame(this.selectedFrameIndex)}),this.recordRefreshButton=document.createElement("button"),this.recordRefreshButton.className="console-copy-button",this.recordRefreshButton.title="Refresh & Record",this.recordRefreshButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>',this.recordRefreshButton.style.padding="0 10px",this.recordRefreshButton.style.lineHeight="24px",this.recordRefreshButton.style.display="flex",this.recordRefreshButton.style.alignItems="center",this.recordRefreshButton.addEventListener("click",()=>{const o=he("timeline");o.recording=!0,de("timeline",o),window.location.reload()}),this.exportButton=document.createElement("button"),this.exportButton.className="console-copy-button",this.exportButton.title="Export",this.exportButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',this.exportButton.style.padding="0 10px",this.exportButton.style.lineHeight="24px",this.exportButton.style.display="flex",this.exportButton.style.alignItems="center",this.exportButton.addEventListener("click",()=>this.exportData());const i=document.createElement("div");i.className="console-buttons-group",i.appendChild(this.viewModeButton),i.appendChild(this.recordButton),i.appendChild(this.recordRefreshButton),i.appendChild(this.exportButton),i.appendChild(t),e.style.display="flex",e.style.justifyContent="space-between",e.style.padding="6px",e.style.borderBottom="1px solid var(--border-color)";const n=document.createElement("div");n.textContent="Backend Calls",n.style.display="flex",n.style.alignItems="center",n.style.color="var(--text-primary)",n.style.alignSelf="center",n.style.paddingLeft="5px",this.frameInfo=document.createElement("span"),this.frameInfo.style.display="inline-flex",this.frameInfo.style.alignItems="center",this.frameInfo.style.marginLeft="15px",this.frameInfo.style.fontFamily="monospace",this.frameInfo.style.color="var(--text-secondary)",this.frameInfo.style.fontSize="12px",n.appendChild(this.frameInfo),e.appendChild(n),e.appendChild(i),this.scrollWrapper.appendChild(e)}buildUI(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.height="calc(100% - 37px)",e.style.width="100%";const t=document.createElement("div");t.style.height="60px",t.style.minHeight="60px",t.style.borderBottom="1px solid var(--border-color)",t.style.backgroundColor="var(--background-color)",this.graphSlider=document.createElement("div"),this.graphSlider.style.height="100%",this.graphSlider.style.margin="0 10px",this.graphSlider.style.position="relative",this.graphSlider.style.cursor="crosshair",t.appendChild(this.graphSlider),this.graph.domElement.style.width="100%",this.graph.domElement.style.height="100%",this.graphSlider.appendChild(this.graph.domElement),this.hoverIndicator=document.createElement("div"),this.hoverIndicator.style.position="absolute",this.hoverIndicator.style.top="0",this.hoverIndicator.style.bottom="0",this.hoverIndicator.style.width="1px",this.hoverIndicator.style.backgroundColor="rgba(255, 255, 255, 0.3)",this.hoverIndicator.style.pointerEvents="none",this.hoverIndicator.style.display="none",this.hoverIndicator.style.zIndex="9",this.hoverIndicator.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.hoverIndicator),this.playhead=document.createElement("div"),this.playhead.style.position="absolute",this.playhead.style.top="0",this.playhead.style.bottom="0",this.playhead.style.width="2px",this.playhead.style.backgroundColor="var(--color-red)",this.playhead.style.boxShadow="0 0 4px rgba(255,0,0,0.5)",this.playhead.style.pointerEvents="none",this.playhead.style.display="none",this.playhead.style.zIndex="10",this.playhead.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.playhead);const i=document.createElement("div");i.style.position="absolute",i.style.top="0",i.style.left="50%",i.style.transform="translate(-50%, 0)",i.style.width="0",i.style.height="0",i.style.borderLeft="6px solid transparent",i.style.borderRight="6px solid transparent",i.style.borderTop="8px solid var(--color-red)",this.playhead.appendChild(i),this.graphSlider.tabIndex=0,this.graphSlider.style.outline="none";let n=!1;const o=a=>{if(this.frames.length===0)return;const l=this.graphSlider.getBoundingClientRect();let c=a.clientX-l.left;c=Math.max(0,Math.min(c,l.width)),this.fixedScreenX=c;const h=this.graph.lines.calls.points.length;if(h===0)return;const u=l.width/(this.graph.maxPoints-1),p=l.width-(h-1)*u;let m=Math.round((c-p)/u);m=Math.max(0,Math.min(m,h-1)),m>=h-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;let g=m;this.frames.length>h&&(g+=this.frames.length-h),this.playhead.style.display="block",this.selectFrame(g)};this.graphSlider.addEventListener("mousedown",a=>{n=!0,this.isManualScrubbing=!0,this.graphSlider.focus(),o(a)}),this.graphSlider.addEventListener("mouseenter",()=>{this.frames.length>0&&!this.isRecording&&(this.hoverIndicator.style.display="block")}),this.graphSlider.addEventListener("mouseleave",()=>{this.hoverIndicator.style.display="none"}),this.graphSlider.addEventListener("mousemove",a=>{if(this.frames.length===0||this.isRecording)return;const l=this.graphSlider.getBoundingClientRect();let c=a.clientX-l.left;c=Math.max(0,Math.min(c,l.width));const h=this.graph.lines.calls.points.length;if(h>0){const u=l.width/(this.graph.maxPoints-1),p=l.width-(h-1)*u;let m=Math.round((c-p)/u);m=Math.max(0,Math.min(m,h-1));let g=p+m*u;g=Math.max(1,Math.min(g,l.width-1)),this.hoverIndicator.style.left=g+"px"}else{const u=Math.max(1,Math.min(c,l.width-1));this.hoverIndicator.style.left=u+"px"}}),this.graphSlider.addEventListener("keydown",a=>{if(this.frames.length===0||this.isRecording)return;let l=this.selectedFrameIndex;if(a.key==="ArrowLeft"?(l=Math.max(0,this.selectedFrameIndex-1),a.preventDefault()):a.key==="ArrowRight"&&(l=Math.min(this.frames.length-1,this.selectedFrameIndex+1),a.preventDefault()),l!==this.selectedFrameIndex){this.selectFrame(l);const c=this.graph.lines.calls.points.length;if(c>0){let h=l;this.frames.length>c&&(h=l-(this.frames.length-c)),h>=c-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;const u=this.graphSlider.getBoundingClientRect(),p=u.width/(this.graph.maxPoints-1),m=u.width-(c-1)*p;this.fixedScreenX=m+h*p}}}),window.addEventListener("mousemove",a=>{if(n){o(a);const l=this.graphSlider.getBoundingClientRect();let c=a.clientX-l.left;c=Math.max(0,Math.min(c,l.width));const h=this.graph.lines.calls.points.length;if(h>0){const u=l.width/(this.graph.maxPoints-1),p=l.width-(h-1)*u;let m=Math.round((c-p)/u);m=Math.max(0,Math.min(m,h-1));let g=p+m*u;g=Math.max(1,Math.min(g,l.width-1)),this.hoverIndicator.style.left=g+"px"}else{const u=Math.max(1,Math.min(c,l.width-1));this.hoverIndicator.style.left=u+"px"}}}),window.addEventListener("mouseup",()=>{n=!1,this.isManualScrubbing=!1}),e.appendChild(t);const r=document.createElement("div");r.style.flex="1",r.style.display="flex",r.style.flexDirection="column",r.style.overflow="hidden",this.timelineTrack=document.createElement("div"),this.timelineTrack.style.flex="1",this.timelineTrack.style.overflowY="auto",this.timelineTrack.style.margin="10px",this.timelineTrack.style.backgroundColor="var(--background-color)",r.appendChild(this.timelineTrack),e.appendChild(r),this.scrollWrapper.appendChild(e)}setRenderer(e){this.renderer=e;const t=he("timeline");t.recording&&(t.recording=!1,de("timeline",t),this.toggleRecording())}toggleRecording(){if(!this.renderer){console.warn("Timeline: No renderer defined.");return}this.isRecording=!this.isRecording,this.isRecording?(this.recordButton.title="Stop",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',this.recordButton.style.color="var(--color-red)",this.startRecording()):(this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.color="",this.stopRecording(),this.renderSlider())}startRecording(){this.frames=[],this.currentFrame=null,this.selectedFrameIndex=-1,this.fixedScreenX=0,this.isTrackingLatest=!0,this.isManualScrubbing=!1,this.clear(),this.frameInfo.textContent="Recording...";const e=this.renderer.backend,t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter(i=>i!=="constructor");for(const i of t){const n=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),i);if(n&&(n.get||n.set))continue;const o=e[i];typeof o=="function"&&typeof i=="string"&&(this.originalMethods.set(i,o),e[i]=(...r)=>{if(i.toLowerCase().includes("timestamp")||i.startsWith("get")||i.startsWith("set")||i.startsWith("has")||i.startsWith("_")||i.startsWith("needs"))return o.apply(e,r);const a=this.renderer.info.frame;if(!this.currentFrame||this.currentFrame.id!==a){if(this.currentFrame){this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0,isFinite(this.currentFrame.fps)||(this.currentFrame.fps=0);const h=this.currentFrame.triangles||0;if(h>this.baseTriangles){const p=this.baseTriangles;if(this.baseTriangles=h,p>0){const m=p/this.baseTriangles,g=this.graph.lines.triangles.points;for(let f=0;f<g.length;f++)g[f]*=m}}const u=this.baseTriangles>0?h/this.baseTriangles*et:0;this.graph.addPoint("calls",this.currentFrame.calls.length),this.graph.addPoint("fps",this.currentFrame.fps),this.graph.addPoint("triangles",u),this.graph.update()}if(this.currentFrame={id:a,calls:[],fps:0,triangles:0},this.frames.push(this.currentFrame),this.frames.length>Je&&this.frames.shift(),!this.isManualScrubbing){if(this.isTrackingLatest){const h=this.frames.length>1?this.frames.length-2:0;this.selectFrame(h)}else if(this.selectedFrameIndex!==-1){const h=this.graph.lines.calls.points.length;if(h>0){const u=this.graphSlider.getBoundingClientRect(),p=u.width/(this.graph.maxPoints-1),m=u.width-(h-1)*p;let g=Math.round((this.fixedScreenX-m)/p);g=Math.max(0,Math.min(g,h-1));let f=g;this.frames.length>h&&(f+=this.frames.length-h),this.selectFrame(f)}}}}const l={method:i,target:r[0]},c=this.getCallDetail(i,r);return c&&(l.details=c,c.triangles!==void 0&&(this.currentFrame.triangles+=c.triangles)),this.currentFrame.calls.push(l),o.apply(e,r)})}}stopRecording(){if(this.originalMethods.size>0){const e=this.renderer.backend;for(const[t,i]of this.originalMethods.entries())e[t]=i;this.originalMethods.clear(),this.currentFrame&&(this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0)}}clear(){this.frames=[],this.timelineTrack.innerHTML="",this.playhead.style.display="none",this.frameInfo.textContent="",this.baseTriangles=0,this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit(),this.graph.update()}exportData(){if(this.frames.length===0)return;const e=JSON.stringify(this.frames,null,"	"),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),n=document.createElement("a");n.href=i,n.download="threejs-timeline.json",n.click(),URL.revokeObjectURL(i)}getRenderTargetDetails(e){const t=e.textures,i=[],n=a=>{switch(a.type){case pi:case di:return"8";case hi:case ci:case fe:case li:case ai:return"16";case ri:case oi:case nt:case ni:case si:case ii:return"32";default:return"?"}},o=a=>{switch(a.format){case Ti:return"a";case _i:case vi:return"r";case wi:case yi:return"rg";case xi:case bi:return"rgb";case fi:return"depth";case gi:return"depth-stencil";case mi:case ui:default:return"rgba"}};for(let a=0;a<t.length;a++){const l=t[a],c=n(l),h=o(l);let u=`[${a}]`;l.name&&!(l.isDepthTexture&&l.name==="depth")&&(u+=` ${l.name}`),u+=` ${h} ${c} bpc`,i.push(u)}const r={target:e.name||"RenderTarget",[`attachments(${t.length})`]:i.join(", ")};return e.depthTexture&&(r.depth=`${n(e.depthTexture)} bpc`),r}getCallDetail(e,t){switch(e){case"draw":{const i=t[0],n={object:i.object.name||i.object.type,material:i.material.name||i.material.type,geometry:i.geometry.name||i.geometry.type};if(i.getDrawParameters){const o=i.getDrawParameters();o&&(i.object.isMesh||i.object.isSprite)&&(n.triangles=o.vertexCount/3,i.object.count>1&&(n.instance=i.object.count,n["triangles per instance"]=n.triangles,n.triangles*=n.instance))}return n}case"beginRender":{const i=t[0],n={scene:this.renderer.inspector.currentRender.name||"unknown",camera:i.camera.name||i.camera.type};return i.renderTarget&&!i.renderTarget.isPostProcessingRenderTarget?Object.assign(n,this.getRenderTargetDetails(i.renderTarget)):n.target="CanvasTarget",n}case"beginCompute":return{compute:this.renderer.inspector.currentCompute.name||"unknown"};case"compute":{const i=t[1],n=t[2],o=t[4]||i.dispatchSize||i.count,r=i.name||i.type||"unknown";let a=0;n&&(a=n.length);let l;return o.isIndirectStorageBufferAttribute?l="indirect":Array.isArray(o)?l=o.join(", "):l=o,{node:r,bindings:a,dispatch:l}}case"updateBinding":return{group:t[0].name||"unknown"};case"clear":{const i=t[3],n={color:t[0],depth:t[1],stencil:t[2]};if(i.renderTarget&&!i.renderTarget.isPostProcessingRenderTarget){const o=this.getRenderTargetDetails(i.renderTarget);o.depth&&(o["depth texture"]=o.depth,delete o.depth),Object.assign(n,o)}else n.target="CanvasTarget";return n}case"updateViewport":{const i=t[0],{x:n,y:o,width:r,height:a}=i.viewportValue;return{x:n,y:o,width:r,height:a}}case"updateScissor":{const i=t[0],{x:n,y:o,width:r,height:a}=i.scissorValue;return{x:n,y:o,width:r,height:a}}case"createProgram":case"destroyProgram":{const i=t[0];return{stage:i.stage,name:i.name||"unknown"}}case"createRenderPipeline":{const i=t[0];return{object:i.object&&(i.object.name||i.object.type)||"unknown",material:i.material&&(i.material.name||i.material.type)||"unknown"}}case"createComputePipeline":case"destroyComputePipeline":return{name:t[0].name||"unknown"};case"createBindings":case"updateBindings":{const i=t[0],n={group:i.name||"unknown"};return i.bindings&&(n.count=i.bindings.length),n}case"createNodeBuilder":{const i=t[0],n={object:i.name||i.type||"unknown"};return i.material&&(n.material=i.material.name||i.material.type||"unknown"),n}case"createAttribute":case"createIndexAttribute":case"createStorageAttribute":case"destroyAttribute":case"destroyIndexAttribute":case"destroyStorageAttribute":{const i=t[0],n={};return i.name&&(n.name=i.name),i.count!==void 0&&(n.count=i.count),i.itemSize!==void 0&&(n.itemSize=i.itemSize),n}case"copyFramebufferToTexture":{const i=t[0],n=t[2];return{target:this.getTextureName(i),width:n.z,height:n.w}}case"copyTextureToTexture":{const i=t[0],n=t[1];return{source:this.getTextureName(i),destination:this.getTextureName(n)}}case"updateSampler":{const i=t[0];return{magFilter:this.getTextureFilterName(i.magFilter),minFilter:this.getTextureFilterName(i.minFilter),wrapS:this.getTextureWrapName(i.wrapS),wrapT:this.getTextureWrapName(i.wrapT),anisotropy:i.anisotropy}}case"updateTexture":case"generateMipmaps":case"createTexture":case"destroyTexture":{const i=t[0],o={texture:this.getTextureName(i)};return i.image&&(i.image.width!==void 0&&(o.width=i.image.width),i.image.height!==void 0&&(o.height=i.image.height)),o}}return null}getTextureName(e){if(e.name)return e.name;const t=["isFramebufferTexture","isDepthTexture","isDataArrayTexture","isData3DTexture","isDataTexture","isCompressedArrayTexture","isCompressedTexture","isCubeTexture","isVideoTexture","isCanvasTexture","isTexture"];for(const i of t)if(e[i])return i.replace("is","");return"Texture"}getTextureFilterName(e){return{1003:"Nearest",1004:"NearestMipmapNearest",1005:"NearestMipmapLinear",1006:"Linear",1007:"LinearMipmapNearest",1008:"LinearMipmapLinear"}[e]||e}getTextureWrapName(e){return{1e3:"Repeat",1001:"ClampToEdge",1002:"MirroredRepeat"}[e]||e}formatDetails(e){const t=[];for(const i in e)e[i]!==void 0&&t.push(`<span style="opacity: 0.5">${i}:</span> <span style="color: var(--text-secondary); opacity: 1">${e[i]}</span>`);return t.length===0?"":`<span style="font-size: 11px; margin-left: 8px; color: var(--text-secondary); opacity: 1;">{ ${t.join('<span style="opacity: 0.5">, </span>')} }</span>`}renderSlider(){if(this.frames.length===0){this.playhead.style.display="none",this.frameInfo.textContent="";return}this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit();let e=this.frames;e.length>this.graph.maxPoints&&(e=e.slice(-this.graph.maxPoints),this.frames=e);let t=0;for(let n=0;n<e.length;n++){const o=e[n].triangles||0;o>t&&(t=o)}for(let n=0;n<e.length;n++){const o=e[n].triangles||0,r=t>0?o/t*et:0;this.graph.addPoint("calls",e[n].calls.length),this.graph.addPoint("fps",e[n].fps||0),this.graph.addPoint("triangles",r)}this.graph.update(),this.playhead.style.display="block";let i=0;this.selectedFrameIndex!==-1&&this.selectedFrameIndex<this.frames.length?i=this.selectedFrameIndex:this.frames.length>0&&(i=this.frames.length-1),this.selectFrame(i)}selectFrame(e){if(e<0||e>=this.frames.length)return;this.selectedFrameIndex=e;const t=this.frames[e];this.renderTimelineTrack(t);const i=(a,l)=>`<span style="display:inline-flex;align-items:center;margin-left:12px;"><span style="width:6px;height:6px;border-radius:50%;background-color:${a};margin-right:6px;"></span>${l}</span>`,n=Math.max(this.baseTriangles,t.triangles||0);this.frameInfo.innerHTML="Frame: "+t.id+i("var(--color-fps)",(t.fps||0).toFixed(1)+" FPS")+i("var(--color-call)",t.calls.length+" calls")+i("var(--color-red)",(t.triangles||0)+" / "+n+" triangles");const o=this.graphSlider.getBoundingClientRect(),r=this.graph.lines.calls.points.length;if(r>0){const a=o.width/(this.graph.maxPoints-1);let l=e;this.frames.length>r&&(l=e-(this.frames.length-r));let h=o.width-(r-1)*a+l*a;h=Math.max(1,Math.min(h,o.width-1)),this.playhead.style.left=h+"px",this.playhead.style.display="block"}}getCallBlock(e,t,i=0){const n=e.target;let o;if(n&&typeof n=="object"){let r=this.callBlocks.get(n);r||(r=[],this.callBlocks.set(n,r)),o=r[i]}else o=this.fallbackBlocks[t];return o||(o=document.createElement("div"),o.style.padding="4px 8px",o.style.margin="2px 0",o.style.backgroundColor="rgba(255, 255, 255, 0.03)",o.style.fontFamily="monospace",o.style.fontSize="12px",o.style.color="var(--text-primary)",o.style.whiteSpace="nowrap",o.style.overflow="hidden",o.style.textOverflow="ellipsis",o.style.display="flex",o.style.alignItems="center",o.arrow=document.createElement("span"),o.arrow.style.fontSize="10px",o.arrow.style.marginRight="10px",o.arrow.style.cursor="pointer",o.arrow.style.width="26px",o.arrow.style.textAlign="center",o.appendChild(o.arrow),o.titleSpan=document.createElement("span"),o.appendChild(o.titleSpan),o.addEventListener("click",r=>{o._groupId&&(r.stopPropagation(),this.collapsedGroups.has(o._groupId)?this.collapsedGroups.delete(o._groupId):this.collapsedGroups.add(o._groupId),this.renderTimelineTrack(this.frames[this.selectedFrameIndex]))}),n&&typeof n=="object"?this.callBlocks.get(n)[i]=o:this.fallbackBlocks[t]=o),o.style.cursor="default",o._groupId=null,o.arrow.style.display="none",o}renderTimelineTrack(e){if(!e||e.calls.length===0){this.timelineTrack.innerHTML="";return}this.collapsedGroups||(this.collapsedGroups=new Set);let t=0;const i=this.timelineTrack.children;let n=0;const o=new WeakMap;if(this.isHierarchicalView){const r=[];let a=null;for(let u=0;u<e.calls.length;u++){const p=e.calls[u],m=p.method.startsWith("begin")||p.method.startsWith("finish"),g=p.details?this.formatDetails(p.details):"";a&&a.method===p.method&&a.formatedDetails===g&&!m?a.count++:(a={method:p.method,count:1,formatedDetails:g,target:p.target},r.push(a))}let l=0;const c=24,h=[{element:this.timelineTrack,isCollapsed:!1,id:"",beginCount:0}];for(let u=0;u<r.length;u++){const p=r[u];let m=0;p.target&&typeof p.target=="object"&&(m=o.get(p.target)||0,o.set(p.target,m+1));const g=this.getCallBlock(p,t++,m);g.style.marginLeft=l*c+"px",g.style.borderLeft="4px solid "+this.getColorForMethod(p.method);const f=h[h.length-1];if(f.isCollapsed||(i[n]!==g&&this.timelineTrack.insertBefore(g,i[n]),n++),p.method.startsWith("begin")){const C=f.beginCount++,_=f.id+"/"+p.method+"-"+C,T=this.collapsedGroups.has(_);g._groupId=_,g.style.cursor="pointer",g.arrow.style.display="inline-block",g.arrow.textContent=T?"[ + ]":"[ - ]",g.titleSpan.innerHTML=p.method+(p.formatedDetails?p.formatedDetails:"")+(p.count>1?` <span style="opacity: 0.5">( ${p.count} )</span>`:""),l++,h.push({element:g,isCollapsed:f.isCollapsed||T,id:_,beginCount:0})}else p.method.startsWith("finish")?(g.titleSpan.innerHTML=p.method+(p.formatedDetails?p.formatedDetails:"")+(p.count>1?` <span style="opacity: 0.5">( ${p.count} )</span>`:""),l=Math.max(0,l-1),h.pop()):g.titleSpan.innerHTML=p.method+(p.formatedDetails?p.formatedDetails:"")+(p.count>1?` <span style="opacity: 0.5">( ${p.count} )</span>`:"")}}else{const r={};for(let l=0;l<e.calls.length;l++){const c=e.calls[l].method;c.startsWith("finish")||(r[c]=(r[c]||0)+1)}const a=Object.keys(r).map(l=>({method:l,count:r[l]}));a.sort((l,c)=>c.count-l.count);for(let l=0;l<a.length;l++){const c=a[l],h=this.getCallBlock(c,t++);h.style.marginLeft="0px",h.style.borderLeft="4px solid "+this.getColorForMethod(c.method),h.titleSpan.innerHTML=c.method+(c.count>1?` <span style="opacity: 0.5">( ${c.count} )</span>`:""),i[n]!==h&&this.timelineTrack.insertBefore(h,i[n]),n++}}for(;this.timelineTrack.children.length>n;)this.timelineTrack.removeChild(this.timelineTrack.lastChild)}getColorForMethod(e){return e.startsWith("begin")?"var(--color-green)":e.startsWith("finish")||e.startsWith("destroy")?"var(--color-red)":e.startsWith("draw")||e.startsWith("compute")||e.startsWith("create")||e.startsWith("generate")?"var(--color-yellow)":"var(--text-secondary)"}}class Im extends um{constructor(){super();const e=new gm(this);e.addEventListener("resize",c=>this.dispatchEvent(c));const t=new vt({builtin:!0,icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>'});t.hide(),e.addTab(t);const i=new Bm;i.hide(),e.addTab(i);const n=new xm;e.addTab(n);const o=new ym;e.addTab(o);const r=new Lm;e.addTab(r);const a=new wm;e.addTab(a);const l=new Em;e.addTab(l),e.loadLayout(),e.activeTabId||e.setActiveTab(n.id),this.statsData=new Map,this.profiler=e,this.performance=n,this.memory=o,this.console=a,this.parameters=t,this.viewer=i,this.timeline=r,this.settings=l,this.once={},this.extensionsData=new WeakMap,this.displayCycle={text:{needsUpdate:!1,duration:.25,time:0},graph:{needsUpdate:!1,duration:.02,time:0}}}get domElement(){return this.profiler.domElement}onExtension(e,t){const i=n=>{n.name===e&&(t(n.tab),this.settings.removeEventListener("extensionadded",i))};return this.settings.extensions[e]&&this.settings.extensions[e].loaded?t(this.settings.extensions[e]):this.settings.addEventListener("extensionadded",i),this}hide(){this.profiler.hide()}show(){this.profiler.show()}getSize(){return this.profiler.getSize()}setActiveTab(e){return this.profiler.setActiveTab(e.id),this}addTab(e){return this.profiler.addTab(e),this}removeTab(e){return this.profiler.removeTab(e),this}setActiveExtension(e,t){return this.settings.setActiveExtension(e,t),this}resolveConsoleOnce(e,t){const i=e+t;this.once[i]!==!0&&(this.resolveConsole(e,t),this.once[i]=!0)}resolveConsole(e,t,i=null){switch(e){case"log":this.console.addMessage("info",t),console.log(t);break;case"warn":this.console.addMessage("warn",t),i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t);break;case"error":this.console.addMessage("error",t),i&&i.isStackTrace?console.error(i.getError(t)):console.error(t);break}}init(){const e=this.getRenderer();let t=`THREE.WebGPURenderer: ${Ci} [ "`;e.backend.isWebGPUBackend?t+="WebGPU":e.backend.isWebGLBackend&&(t+="WebGL2"),t+='" ]',this.console.addMessage("info",t),e.inspector.domElement.parentElement===null&&e.domElement.parentElement!==null&&e.domElement.parentElement.appendChild(e.inspector.domElement)}setRenderer(e){return super.setRenderer(e),e!==null&&(Si(this.resolveConsole.bind(this)),this.isAvailable&&(e.init().then(()=>{e.backend.trackTimestamp=!0,e.hasFeature("timestamp-query")!==!0&&this.console.addMessage("error","THREE.Inspector: GPU Timestamp Queries not available.")}),this.timeline.setRenderer(e))),this}createParameters(e){return this.parameters.isVisible===!1&&this.parameters.show(),this.parameters.createGroup(e)}getStatsData(e){let t=this.statsData.get(e);return t===void 0&&(t={},this.statsData.set(e,t)),t}resolveStats(e){const t=this.getStatsData(e.cid);t.initialized!==!0&&(t.cpu=e.cpu,t.gpu=e.gpu,t.stats=[],t.initialized=!0),t.stats.length>this.maxFrames&&t.stats.shift(),t.stats.push(e),t.cpu=this.getAverageDeltaTime(t,"cpu"),t.gpu=this.getAverageDeltaTime(t,"gpu"),t.total=t.cpu+t.gpu;for(const i of e.children){this.resolveStats(i);const n=this.getStatsData(i.cid);t.cpu+=n.cpu,t.gpu+=n.gpu,t.total+=n.total}}getNodes(){return this.currentNodes}getAverageDeltaTime(e,t,i=this.fps){const n=e.stats;let o=0,r=0;for(let a=n.length-1;a>=0&&r<i;a--){const c=n[a][t];c>0&&(o+=c,r++)}return r>0?o/r:0}updateTabs(){const e=Object.values(this.profiler.tabs);for(const t of e){let i=this.extensionsData.get(t);i===void 0&&(t.init(this),i={},this.extensionsData.set(t,i)),t.update(this)}}resolveFrame(e){const t=this.getFrameById(e.frameId+1);if(t){e.cpu=0,e.gpu=0,e.total=0;for(const i of e.children){this.resolveStats(i);const n=this.getStatsData(i.cid);e.cpu+=n.cpu,e.gpu+=n.gpu,e.total+=n.total}e.deltaTime=t.startTime-e.startTime,e.miscellaneous=e.deltaTime-e.total,e.miscellaneous<0&&(e.miscellaneous=0),this.updateCycle(this.displayCycle.text),this.updateCycle(this.displayCycle.graph),this.displayCycle.text.needsUpdate&&(x("fps-counter",this.fps.toFixed()),this.performance.updateText(this,e),this.memory.updateText(this)),this.displayCycle.graph.needsUpdate&&(this.performance.updateGraph(this,e),this.memory.updateGraph(this)),this.displayCycle.text.needsUpdate=!1,this.displayCycle.graph.needsUpdate=!1}}updateCycle(e){e.time+=this.nodeFrame.deltaTime,e.time>=e.duration&&(e.needsUpdate=!0,e.time=0)}static getItem(e){return console.warn("Inspector.getItem is deprecated. Use getItem directly instead."),he(e)}static setItem(e,t){console.warn("Inspector.setItem is deprecated. Use setItem directly instead."),de(e,t)}}function he(d){return JSON.parse(localStorage.getItem("threejs-inspector")||"{}")[d]||{}}function de(d,e){const t=JSON.parse(localStorage.getItem("threejs-inspector")||"{}");e===null?delete t[d]:t[d]=e,localStorage.setItem("threejs-inspector",JSON.stringify(t))}const E=new ze,Pm=new S,tt=new S(1,0),it=new S(0,1);let J;class Rm extends ot{static get type(){return"OutlineNode"}constructor(e,t,i={}){super("vec4");const{selectedObjects:n=[],edgeThickness:o=Z(1),edgeGlow:r=Z(0),downSampleRatio:a=2}=i;this.scene=e,this.camera=t,this.selectedObjects=n,this.edgeThicknessNode=we(o),this.edgeGlowNode=we(r),this.downSampleRatio=a,this.updateBeforeType=rt.FRAME,this._renderTargetDepthBuffer=new W,this._renderTargetDepthBuffer.depthTexture=new ki,this._renderTargetDepthBuffer.depthTexture.type=nt,this._renderTargetMaskBuffer=new W,this._renderTargetMaskDownSampleBuffer=new W(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer1=new W(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer2=new W(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer1=new W(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer2=new W(1,1,{depthBuffer:!1}),this._renderTargetComposite=new W(1,1,{depthBuffer:!1}),this._cameraNear=Ne("near","float",t),this._cameraFar=Ne("far","float",t),this._blurDirection=D(new S),this._depthTextureUniform=R(this._renderTargetDepthBuffer.depthTexture),this._maskTextureUniform=R(this._renderTargetMaskBuffer.texture),this._maskTextureDownsSampleUniform=R(this._renderTargetMaskDownSampleBuffer.texture),this._edge1TextureUniform=R(this._renderTargetEdgeBuffer1.texture),this._edge2TextureUniform=R(this._renderTargetEdgeBuffer2.texture),this._blurColorTextureUniform=R(this._renderTargetEdgeBuffer1.texture),this._visibleEdgeColor=oe(1,0,0),this._hiddenEdgeColor=oe(0,1,0),this._depthMaterial=new j,this._depthMaterial.colorNode=Pe(0,0,0),this._depthMaterial.name="OutlineNode.depth",this._depthSpriteMaterial=new Xe,this._depthSpriteMaterial.colorNode=Pe(0,0,0),this._depthSpriteMaterial.name="OutlineNode.depthSprite",this._prepareMaskMaterial=new j,this._prepareMaskMaterial.name="OutlineNode.prepareMask",this._prepareMaskSpriteMaterial=new Xe,this._prepareMaskSpriteMaterial.name="OutlineNode.prepareMaskSprite",this._materialCopy=new j,this._materialCopy.name="OutlineNode.copy",this._edgeDetectionMaterial=new j,this._edgeDetectionMaterial.name="OutlineNode.edgeDetection",this._separableBlurMaterial=new j,this._separableBlurMaterial.name="OutlineNode.separableBlur",this._separableBlurMaterial2=new j,this._separableBlurMaterial2.name="OutlineNode.separableBlur2",this._compositeMaterial=new j,this._compositeMaterial.name="OutlineNode.composite",this._selectionCache=new Set,this._lastSelectionCount=0,this._textureNode=We(this,this._renderTargetComposite.texture)}get visibleEdge(){return this.r}get hiddenEdge(){return this.g}getTextureNode(){return this._textureNode}setSize(e,t){this._renderTargetDepthBuffer.setSize(e,t),this._renderTargetMaskBuffer.setSize(e,t),this._renderTargetComposite.setSize(e,t);let i=Math.round(e/this.downSampleRatio),n=Math.round(t/this.downSampleRatio);this._renderTargetMaskDownSampleBuffer.setSize(i,n),this._renderTargetEdgeBuffer1.setSize(i,n),this._renderTargetBlurBuffer1.setSize(i,n),i=Math.round(i/2),n=Math.round(n/2),this._renderTargetEdgeBuffer2.setSize(i,n),this._renderTargetBlurBuffer2.setSize(i,n)}updateBefore(e){const{renderer:t}=e,{camera:i,scene:n}=this;if(this._updateSelectionCache(),this._selectionCache.size===0){this._lastSelectionCount>0&&(J=q.resetRendererState(t,J),t.setRenderTarget(this._renderTargetComposite),t.setClearColor(0,0),t.clear(),q.restoreRendererState(t,J),this._lastSelectionCount=0);return}this._lastSelectionCount=this._selectionCache.size,J=q.resetRendererAndSceneState(t,n,J);const o=t.getDrawingBufferSize(Pm);this.setSize(o.width,o.height),t.setClearColor(16777215,1);const r=n.name;t.setRenderTarget(this._renderTargetDepthBuffer),t.setRenderObjectFunction((a,l,c,h,u,p,m,g)=>{if(this._selectionCache.has(a)===!1){const f=a.isSprite?this._depthSpriteMaterial:this._depthMaterial;t.renderObject(a,l,c,h,f,p,m,g)}}),n.name="Outline [ Non-Selected Objects Pass ]",t.render(n,i),t.setRenderTarget(this._renderTargetMaskBuffer),t.setRenderObjectFunction((a,l,c,h,u,p,m,g)=>{if(this._selectionCache.has(a)===!0){const f=a.isSprite?this._prepareMaskSpriteMaterial:this._prepareMaskMaterial;t.renderObject(a,l,c,h,f,p,m,g)}}),n.name="Outline [ Selected Objects Pass ]",t.render(n,i),t.setRenderObjectFunction(J.renderObjectFunction),this._selectionCache.clear(),n.name=r,E.material=this._materialCopy,E.name="Outline [ Downsample ]",t.setRenderTarget(this._renderTargetMaskDownSampleBuffer),E.render(t),E.material=this._edgeDetectionMaterial,E.name="Outline [ Edge Detection ]",t.setRenderTarget(this._renderTargetEdgeBuffer1),E.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(tt),E.material=this._separableBlurMaterial,E.name="Outline [ Blur Half Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer1),E.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer1.texture,this._blurDirection.value.copy(it),t.setRenderTarget(this._renderTargetEdgeBuffer1),E.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(tt),E.material=this._separableBlurMaterial2,E.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer2),E.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer2.texture,this._blurDirection.value.copy(it),t.setRenderTarget(this._renderTargetEdgeBuffer2),E.render(t),E.material=this._compositeMaterial,E.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetComposite),E.render(t),q.restoreRendererAndSceneState(t,n,J)}setup(){const e=()=>{const a=this._depthTextureUniform.sample(je);let l;this.camera.isPerspectiveCamera?l=gt(a,this._cameraNear,this._cameraFar):l=ut(a,this._cameraNear,this._cameraFar);const c=ft.z.lessThanEqual(l).select(1,0);return oe(0,c,1)};this._prepareMaskMaterial.colorNode=e(),this._prepareMaskMaterial.needsUpdate=!0,this._prepareMaskSpriteMaterial.colorNode=e(),this._prepareMaskSpriteMaterial.needsUpdate=!0,this._materialCopy.fragmentNode=this._maskTextureUniform,this._materialCopy.needsUpdate=!0;const t=H(()=>{const a=Fe(this._maskTextureDownsSampleUniform),l=le(1).div(a).toVar(),c=O(1,0,0,1).mul(O(l,l)),h=ve(),u=this._maskTextureDownsSampleUniform.sample(h.add(c.xy)).toVar(),p=this._maskTextureDownsSampleUniform.sample(h.sub(c.xy)).toVar(),m=this._maskTextureDownsSampleUniform.sample(h.add(c.yw)).toVar(),g=this._maskTextureDownsSampleUniform.sample(h.sub(c.yw)).toVar(),f=De(u.r.sub(p.r),.5),C=De(m.r.sub(g.r),.5),_=le(f,C).length(),T=be(u.g,p.g),L=be(m.g,g.g),U=be(T,L).oneMinus().greaterThan(.001).select(this._visibleEdgeColor,this._hiddenEdgeColor);return O(U,1).mul(_)});this._edgeDetectionMaterial.fragmentNode=t(),this._edgeDetectionMaterial.needsUpdate=!0;const i=4,n=H(([a,l])=>Z(.39894).mul(ht(Z(-.5).mul(a).mul(a).div(l.mul(l))).div(l))),o=H(([a])=>{const l=Fe(this._maskTextureDownsSampleUniform),c=le(1).div(l).toVar(),h=ve(),u=a.div(2).toVar(),p=n(0,u).toVar(),m=this._blurColorTextureUniform.sample(h).mul(p).toVar(),g=this._blurDirection.mul(c).mul(a).div(i).toVar(),f=g.toVar();return Ve({start:ce(1),end:ce(i),type:"int",condition:"<="},({i:C})=>{const _=a.mul(Z(C)).div(i),T=n(_,u),L=this._blurColorTextureUniform.sample(h.add(f)),z=this._blurColorTextureUniform.sample(h.sub(f));m.addAssign(L.add(z).mul(T)),p.addAssign(T.mul(2)),f.addAssign(g)}),m.div(p)});this._separableBlurMaterial.fragmentNode=o(this.edgeThicknessNode),this._separableBlurMaterial.needsUpdate=!0,this._separableBlurMaterial2.fragmentNode=o(i),this._separableBlurMaterial2.needsUpdate=!0;const r=H(()=>{const a=this._edge1TextureUniform,l=this._edge2TextureUniform,c=this._maskTextureUniform,h=a.add(l.mul(this.edgeGlowNode));return c.r.mul(h)});return this._compositeMaterial.fragmentNode=r(),this._compositeMaterial.needsUpdate=!0,this._textureNode}dispose(){this.selectedObjects.length=0,this._renderTargetDepthBuffer.dispose(),this._renderTargetMaskBuffer.dispose(),this._renderTargetMaskDownSampleBuffer.dispose(),this._renderTargetEdgeBuffer1.dispose(),this._renderTargetEdgeBuffer2.dispose(),this._renderTargetBlurBuffer1.dispose(),this._renderTargetBlurBuffer2.dispose(),this._renderTargetComposite.dispose(),this._depthMaterial.dispose(),this._depthSpriteMaterial.dispose(),this._prepareMaskMaterial.dispose(),this._prepareMaskSpriteMaterial.dispose(),this._materialCopy.dispose(),this._edgeDetectionMaterial.dispose(),this._separableBlurMaterial.dispose(),this._separableBlurMaterial2.dispose(),this._compositeMaterial.dispose()}_updateSelectionCache(){for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(i=>{(i.isMesh||i.isSprite)&&this._selectionCache.add(i)})}}const Dm=(d,e,t)=>new Rm(d,e,t);class Nm{constructor(){v(this,"renderer");v(this,"scene");v(this,"pipeline");v(this,"scenePass");v(this,"bloomPass");v(this,"outlinePass");v(this,"sceneOutput");v(this,"bloomOutput");v(this,"_render",()=>{this.renderer.render(this.scene,this.camera)});this.renderer=new ye({antialias:!0}),this.renderer.setClearColor("#000"),this.renderer.outputColorSpace=Ei,this.renderer.toneMapping=Le,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Mi,this.renderer.inspector=new Im,this.renderer.setPixelRatio(window.devicePixelRatio),this.scene=new Bi,this.scene.background=new Ce("#000"),this.pipeline=new Ni(this.renderer),this.scenePass=mt(this.scene,Li),this.outlinePass=Dm(this.scene,this.camera,{edgeGlow:D(0),edgeThickness:D(1)});const{visibleEdge:e,hiddenEdge:t}=this.outlinePass,i=D(new Ce("#00ff00")),n=D(new Ce("#00ff00").multiplyScalar(.5)),o=D(3),r=e.mul(i).add(t.mul(n)).mul(o);this.sceneOutput=r.add(this.scenePass),this.bloomPass=hm(this.sceneOutput),this.bloomOutput=this.sceneOutput.add(this.bloomPass),this.pipeline.outputNode=this.sceneOutput}get camera(){return this.scenePass.camera}set camera(e){this.scenePass.camera=e}mount(e){e.appendChild(this.renderer.domElement)}setOutlineSelections(e){this.outlinePass.selectedObjects=[...e]}render(){this.pipeline.render()}resize(e,t){this.renderer.setSize(e,t)}dispose(){this.outlinePass.selectedObjects=[],this.renderer.domElement.remove(),this.pipeline.dispose(),this.renderer.dispose()}toImage(){return this.render(),this.renderer.domElement.toDataURL("image/png")}}class Xm extends st{constructor(){super();v(this,"container");v(this,"render");v(this,"timer");v(this,"modules");v(this,"update",()=>{this.timer.update(),this.emit(Y.Update,this),this.emit(Y.RenderBefore,this),this.render.render(),this.emit(Y.RenderAfter,this)});v(this,"resize",()=>{const{offsetWidth:t,offsetHeight:i}=this.container;this.render.resize(t,i),this.emit(Y.Resize,this)});this.container=document.createElement("div"),this.container.className="core-3d",this.container.style.position="relative",this.container.style.height="100%",this.container.style.pointerEvents="auto",this.container.tabIndex=0,this.render=new Nm,this.timer=new Ii,this.modules=new Map,F.from(this.render.scene).attach(this)}mount(t){t.appendChild(this.container),this.render.mount(this.container),this.timer.connect(document),this.emit(Y.Mount,this)}unmount(){this.timer.disconnect(),this.modules.forEach(t=>t.unmount(this)),this.modules.clear(),F.destroy(this.render.scene),this.render.dispose(),this.container.remove(),this.emit(Y.Unmount,this),this.removeAllListeners()}start(){this.timer.reset(),this.render.renderer.setAnimationLoop(this.update),this.emit(Y.Start,this)}stop(){this.render.renderer.setAnimationLoop(null),this.emit(Y.Stop,this)}addModule(t,i){this.modules.set(t,i),i.mount(this)}getModule(t){return this.modules.get(t)}removeModule(t){const i=this.modules.get(t);i==null||i.unmount(this),this.modules.delete(t)}}export{Xm as C,jm as D,F as E,H as F,qi as I,Ve as L,Om as O,Ie as S,$m as T,Zi as a,Um as b,Vm as c,ko as d,ve as e,Ym as f,Gm as g,O as h,Wm as i,Z as j,qh as k,Tu as l,Lo as m,we as n,Ho as o,We as p,Jh as q,Hm as r,Xd as s,D as u,le as v};
