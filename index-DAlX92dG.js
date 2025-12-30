import{r as a,j as e,B as g}from"./index-Bb-7Eb0M.js";import{F as u}from"./index-Bkyw4N8c.js";import{M as h}from"./index-4nTUrSXL.js";const C=`
  enum EntityType {
    Object3D = 'Object3D',
    Scene = 'Scene',
    Group = 'Group',
    PerspectiveCamera = 'PerspectiveCamera',
    OrthographicCamera = 'OrthographicCamera',
    AmbientLight = 'AmbientLight',
    DirectionalLight = 'DirectionalLight',
    HemisphereLight = 'HemisphereLight',
    SpotLight = 'SpotLight',
    PointLight = 'PointLight',
    Mesh = 'Mesh',
    Plane = 'Plane',
    Box = 'Box',
    Sphere = 'Sphere',
    Cone = 'Cone',
    Cylinder = 'Cylinder',
    Pipe = 'Pipe',
    Polygon = 'Polygon',
    Model = 'Model',
    Symbol = 'Symbol',
    Text = 'Text',
    Particle = 'Particle',
  }

  enum ComponentType {
    SimpleScript = 'SimpleScript',
    Animator = 'Animator',
    OrbitControls = 'OrbitControls',
    PointerLockControls = 'PointerLockControls',
    PlayableDirector = 'PlayableDirector',
  }  

  interface Component {
    id: string;
    name: string;
    type: ComponentType;
    enabled: boolean;

    /** 获取组件属性 */
    getAttr(key: string): unknown
    /** 设置组件属性 */
    setAttr(key: string, value: unknown): void
  }

  interface Entity {
    id: string;
    name: string;
    type: EntityType;
    visible: boolean;
    selectable: boolean;
    transformable: boolean;
    deleteable: boolean;
    copiable: boolean;
    moveable: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: THREE.Vector3;
    children: Entity[];
    components: Component[];
    parent?: Entity

    /** 获取实体属性 */
    getAttr(key: string): unknown
    /** 设置实体属性 */
    setAttr(key: string, value: unknown): void
    /** 窗口尺寸改变回调 */
    resize(): void
    /** 每帧更新回调 */
    update(delta: number): void
    /** 注册事件监听 */
    on(type: string, listener: () => void)): void
    /** 注销事件监听 */
    off(type: string, listener: () => void)): void
    /** 添加子物体 */
    add(entity: Entity, index: number): void
    /** 移除子物体 */
    remove(entity: Entity): number    
    /** 添加组件 */
    addComponent(component: Component, index: number): void       
    /** 移除组件 */
    removeComponent(component: Component): number
    /** 获取组件 */
    getComponent(type: string): Component
    /** 注销实体 */
    dispose(): void             
  }

  interface PlayableTrack {
  
  }

  interface PlayableClip {
    parent: PlayableTrack
    name: string
    type: string

    start: number
    duration: number
    end: number
  }

  interface PlayableScriptClip extends PlayableClip {

  }

`,v=`
declare const entity: Entity;
`,S=l=>{const{value:n,onChange:s}=l,[r,o]=a.useState(""),[p,i]=a.useState(!1);a.useEffect(()=>{o(n)},[n]);const c=()=>{o(n),i(!0)},m=()=>{s(r),i(!1)},d=()=>{i(!1)},b=t=>{o(t??"")},y=t=>{t.languages.typescript.javascriptDefaults.addExtraLib(C,"global-types.d.ts"),t.languages.typescript.javascriptDefaults.addExtraLib(v,"variable-types.d.ts")};return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:c,children:"编辑"}),e.jsx(h,{width:"80%",title:"脚本",open:p,onOk:m,onCancel:d,children:e.jsx(u,{theme:"vs-dark",height:"70vh",defaultLanguage:"javascript",value:r,onChange:b,beforeMount:y})})]})};export{S as ScriptWrap};
