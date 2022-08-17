
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const sidewalkTile = new Entity('sidewalkTile')
engine.addEntity(sidewalkTile)
sidewalkTile.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sidewalkTile.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("9e52d29e-d70c-4dc2-9cff-80cfc2771b58/FloorBlock_01/FloorBlock_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
sidewalkTile.addComponentOrReplace(gltfShape2)

const cactus = new Entity('cactus')
engine.addEntity(cactus)
cactus.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(9, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cactus.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("ac4bee02-ae33-4788-a041-183781554855/Cactus_01/Cactus_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true

cactus.addComponentOrReplace(gltfShape3)

const box = new Entity()
box.addComponent(new Transform())
box.getComponent(Transform).position.set(8 ,1, 8)
box.addComponent(new BoxShape())
engine.addEntity(box)
box.addComponent(new OnPointerDown(async e => {
  
	log("start")
  
  
  

	  
  }
))