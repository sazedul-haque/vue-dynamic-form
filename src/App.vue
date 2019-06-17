<template>
  <div class="container">
    <h1>Hello World!</h1>
    <!-- <div class="blog-item" v-for="post of posts">
  		<h3>{{post.title}}</h3>
  		<p>{{ post.body }}</p>
  	</div> -->
  	<!-- <div>{{ product }}</div> -->
  	<div>
  		<pre>{{ output }}</pre>
  	</div>
  	<p v-if="output.specifications">{{ output.specifications.type.shape }}</p>
  	<form @submit="formSubmit" class="mb-5">
  		<div class="row">
  			<div class="col-md-12 mb-3">
	  			<input class="form-control" type="text" v-model="name" placeholder="Name">
	  		</div>
  			<div class="col-md-12 mb-3">
	  			<textarea class="form-control" rows="3" v-model="excerpt" placeholder="Excerpt"></textarea>
	  		</div>
  			<div class="col-md-6 mb-3">
	  			<select v-model="brand" class="form-control">
	  				<option disabled value="">Brand</option>
	  				<option value="apple">Apple</option>
	  				<option value="samsung">Samsung</option>
	  				<option value="blackberry">Blackberry</option>
	  				<option value="nokia">Nokia</option>
	  			</select>
	  		</div>
  			<div class="col-md-6 mb-3">
	  			<select v-model="categories" class="form-control">
	  				<option disabled value="">Categories</option>
	  				<option value="Mobile">Mobile</option>
	  				<option value="Computer">Computer</option>
	  				<option value="Notebook">Notebook</option>
	  			</select>
	  		</div>
	  		<div class="col-md-12 mb-3">
	  			<label>Type: </label>
	  			<input type="checkbox" v-model="type" value="Smartphone"> Smartphone
	  			<input type="checkbox" v-model="type" value="Featured Phone"> Featured Phone
	  			<input type="checkbox" v-model="type" value="Selfi Phone"> Selfi Phone
	  		</div>
  			<div class="col-md-6 mb-3">
	  			<select v-model="series" class="form-control">
	  				<option disabled value="">Series</option>
	  				<option value="Galaxy">Galaxy</option>
	  				<option value="Redmi">Redmi</option>
	  				<option value="iPhone">iPhone</option>
	  			</select>
	  		</div>
  			<div class="col-md-6 mb-3">
	  			<select v-model="os" class="form-control">
	  				<option disabled value="">OS</option>
	  				<option value="Android">Android</option>
	  				<option value="IOS">IOS</option>
	  			</select>
	  		</div>
	  		<div class="col-md-6 mb-3">
	  			<label>SIM: </label>
	  			<input type="checkbox" v-model="sim" value="Single Sim"> Single Sim
	  			<input type="checkbox" v-model="sim" value="Nano Sim"> Nano Sim
	  		</div>
	  		<div class="col-md-6 mb-3">
	  			<label>Storage: </label>
	  			<input type="checkbox" v-model="storage" value="16 GB"> 16 GB
	  			<input type="checkbox" v-model="storage" value="32 GB"> 32 GB
	  			<input type="checkbox" v-model="storage" value="64 GB"> 64 GB
	  		</div>
	  		<div class="col-md-6 mb-3">
	  			<label>Display Size: </label>
	  			<input type="checkbox" v-model="displaySize" value="5.5 Inch"> 5.5 Inch
	  			<input type="checkbox" v-model="displaySize" value="6.0 Inch"> 6.0 Inch
			</div>
			<div class="col-md-6 mb-3">
				<label>RAM: </label>
	  			<input type="checkbox" v-model="ram" value="1 GB"> 1 GB
	  			<input type="checkbox" v-model="ram" value="2 GB"> 2 GB
	  			<input type="checkbox" v-model="ram" value="3 GB"> 3 GB
	  			<input type="checkbox" v-model="ram" value="4 GB"> 4 GB
	  		</div>
			<div class="col-md-6 mb-3">
	  			<input class="form-control" type="text" v-model="mainCamera" placeholder="Main Camera">
	  		</div>
			<div class="col-md-6 mb-3">
	  			<input class="form-control" type="text" v-model="frontCamera" placeholder="Front Camera">
	  		</div>
  			<div class="col-md-6 mb-3">
	  			<select v-model="shape" class="form-control">
	  				<option disabled value="">Shape</option>
	  				<option value="Bar">Bar</option>
	  				<option value="Flip">Flip</option>
	  				<option value="Slide">Slide</option>
	  			</select>
	  		</div>
  			<div class="col-md-6 mb-3">
	  			<select v-model="waterResistant" class="form-control">
	  				<option disabled value="">Water Resistant</option>
	  				<option value="Yes">Yes</option>
	  				<option value="NO">NO</option>
	  			</select>
	  		</div>
			<div class="col-md-12 mb-3">
	  			<input class="form-control" type="text" v-model="batterymAh" placeholder="Battery">
	  		</div>
			<div class="col-md-12 mb-3">
				<label>Color: </label>
	  			<input type="checkbox" v-model="color" value="Blue"> Blue
	  			<input type="checkbox" v-model="color" value="Purple"> Purple
	  			<input type="checkbox" v-model="color" value="Pink"> Pink
	  			<input type="checkbox" v-model="color" value="Yellow"> Yellow
	  			<!-- <input class="form-control" type="text" v-model="color" placeholder="Type color"> -->
	  		</div>
	  		<div class="col-md-12">
	  			<h2>Specifications</h2>

		  		<table class="table shadow-sm p-3 bg-white rounded">
		  			<tr>
		  				<td :rowspan="Object.keys(specifications.type).length + 1">Type</td>
		  				<td>Type</td>
		  				<td>
		  					<input type="checkbox" v-model="specifications.type.type" value="Smartphone"> Smartphone
				  			<input type="checkbox" v-model="specifications.type.type" value="Featured Phone"> Featured Phone
				  			<input type="checkbox" v-model="specifications.type.type" value="Camera Phone"> Camera Phone
				  			<input type="checkbox" v-model="specifications.type.type" value="Budget Phone"> Budget Phone
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>Shape</td>
		  				<td>
		  					<input type="text" v-model="specifications.type.shape" class="form-control" placeholder="shape">
		  				</td>
		  			</tr>
		  			<!-- custom option -->
		  			<tr v-for="value, name in specifications.type" v-if="name !== 'shape' && name !== 'type'">
		  				<td>{{ name }}</td>
		  				<td>
		  					<input type="text" v-model="specifications.type[name]" class="form-control" :placeholder="name">
		  					<div @click="removeOption(specifications.type, name)" class="btn btn-danger">Remove</div>
		  				</td>
		  			</tr>
		  			<tr>
		  				<td><input class="form-control mb-2" type="text" v-model="newTypeOption" placeholder="Add new attribute"></td>
		  				<td class="text-right"><div @click="addOption(specifications.type, newTypeOption)" class="btn btn-secondary">Add New</div></td>
		  			</tr>
		  			<!-- custom option -->

		  			<tr>
		  				<td rowspan="7">Basic</td>
		  				<td>OS</td>
		  				<td><input type="text" v-model="specifications.basic.os" class="form-control" placeholder="os"></td>
		  			</tr>
		  			<tr>
		  				<td>OS Version</td>
		  				<td>
		  					<input type="text" v-model="specifications.basic.osVersion" class="form-control" placeholder="osVersion">
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>SIM</td>
		  				<td>
				  			<input type="checkbox" v-model="sim" value="Single Sim"> Single Sim
				  			<input type="checkbox" v-model="sim" value="Nano Sim"> Nano Sim
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>CPU</td>
		  				<td>
		  					<input type="text" v-model="specifications.basic.cpu" class="form-control" placeholder="cpu">
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>Storage</td>
		  				<td>
		  					<input type="checkbox" v-model="specifications.basic.storage" value="16 GB"> 16 GB
				  			<input type="checkbox" v-model="specifications.basic.storage" value="32 GB"> 32 GB
				  			<input type="checkbox" v-model="specifications.basic.storage" value="64 GB"> 64 GB
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>RAM</td>
		  				<td>
		  					<input type="checkbox" v-model="specifications.basic.ram" value="1 GB"> 1 GB
				  			<input type="checkbox" v-model="specifications.basic.ram" value="2 GB"> 2 GB
				  			<input type="checkbox" v-model="specifications.basic.ram" value="3 GB"> 3 GB
				  			<input type="checkbox" v-model="specifications.basic.ram" value="4 GB"> 4 GB
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>Battery</td>
		  				<td>
		  					<input type="text" v-model="specifications.basic.battery" class="form-control" placeholder="battery">
		  				</td>
		  			</tr>

		  			<tr>
		  				<td :rowspan="Object.keys(specifications.screen).length + 1">Screen</td>
		  				<td>Display Size</td>
		  				<td>
		  					<input type="text" v-model="specifications.screen.displaySize" class="form-control" placeholder="Display Size">
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>Resolation</td>
		  				<td>
		  					<input type="text" v-model="specifications.screen.resolation" class="form-control" placeholder="Resolation">
		  				</td>
		  			</tr>
		  			<!-- custom option -->
		  			<tr v-for="value, name in specifications.screen" v-if="name !== 'displaySize' && name !== 'resolation'">
		  				<td>{{ name }}</td>
		  				<td>
		  					<input type="text" v-model="specifications.screen[name]" class="form-control" :placeholder="name">
		  					<div @click="removeOption(specifications.screen, name)" class="btn btn-danger">Remove</div>
		  				</td>
		  			</tr>
		  			<tr>
		  				<td><input class="form-control mb-2" type="text" v-model="newScreenOption" placeholder="Add new attribute"></td>
		  				<td class="text-right"><div @click="addOption(specifications.screen, newScreenOption)" class="btn btn-secondary">Add New</div></td>
		  			</tr>
		  			<!-- custom option -->

		  			<tr>
		  				<td>Network</td>
		  				<td>Type</td>
		  				<td>
		  					<input type="checkbox" v-model="specifications.network.Type" value="2G"> 2G
		  					<input type="checkbox" v-model="specifications.network.Type" value="3G"> 3G
		  					<input type="checkbox" v-model="specifications.network.Type" value="4G (LTE)"> 4G (LTE)
		  				</td>
		  			</tr>

		  			<tr>
		  				<td rowspan="2">Camera</td>
		  				<td>Main Camera</td>
		  				<td>
		  					<input type="text" class="form-control" v-model="specifications.camera.mainCamera" placeholder="Main Camera">
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>Front Camera</td>
		  				<td>
		  					<input type="text" class="form-control" v-model="specifications.camera.frontCamera" placeholder="Front Camera">
		  				</td>
		  			</tr>

		  			<tr>
		  				<td rowspan="2">Size</td>
		  				<td>Dimensions</td>
		  				<td>
		  					<input type="text" class="form-control" v-model="specifications.size.dimensions" placeholder="Dimensions">
		  				</td>
		  			</tr>
		  			<tr>
		  				<td>Weight</td>
		  				<td>
		  					<input type="text" class="form-control" v-model="specifications.size.weight" placeholder="Weight">
		  				</td>
		  			</tr>

		  			<tr>
		  				<td>Other</td>
		  				<td>Features</td>
		  				<td>
		  					<input type="checkbox" v-model="specifications.others.features" value="Wi-Fi"> Wi-Fi
		  					<input type="checkbox" v-model="specifications.others.features" value="GPS"> GPS
		  					<input type="checkbox" v-model="specifications.others.features" value="Bluetooth"> Bluetooth
		  					<input type="checkbox" v-model="specifications.others.features" value="Flash"> Flash
		  					<input type="checkbox" v-model="specifications.others.features" value="Face Unlock"> Face Unlock
		  					<input type="checkbox" v-model="specifications.others.features" value="Dual Cameras"> Dual Cameras
		  				</td>
		  			</tr>

		  		</table>
		  	</div>
		  	<div class="col-md-12 mb-3">
		  		<textarea v-model="description" rows="4" class="form-control" placeholder="Description"></textarea>
		  	</div>
		  	<div class="col-md-12 mb-3"><h3>SEO</h3></div>
		  	<div class="col-md-12 mb-3">
		  		<input type="text" class="form-control" v-model="seo.meta_title" placeholder="Meta Title">
		  	</div>
		  	<div class="col-md-12 mb-3">
		  		<tags-input 
			    element-id="tags" 
			    v-model="seo.meta_keywords" 
			    :existing-tags="{ 
			        'meta-three': 'Meta One',
			        'meta-two': 'Meta Two',
			        'meta-three': 'Meta Three',
			    }"
    			:typeahead="true"
    			></tags-input>
		  	</div>
		  	<div class="col-md-12 mb-3">
		  		<textarea class="form-control" rows="3" v-model="seo.meta_description" placeholder="Meta description"></textarea>
		  	</div>
		  	<div class="col-md-12 mb-3"><h3>urls</h3></div>
		  	<div class="col-md-12 mb-3">
		  		<input type="text" class="form-control" v-model="urls.offical_website_url" placeholder="offical website url">
		  	</div>
		  	<div class="col-md-12 mb-3">
		  		<input type="text" class="form-control" v-model="urls.youtube_video_id" placeholder="youtube video id">
		  	</div>
		  	<div class="col-md-12 mb-3">
		  		<input type="rext" class="form-control" v-model="urls.compare_products_slug" placeholder="compare products slug">
		  	</div>
		  	<div class="col-md-12 mb-3">
		  		<textarea class="form-control" rows="5" v-model="others" placeholder="Others"></textarea>
		  	</div>



	  		<!-- <div class="col-md-12 mb-5" v-for="(sp, index) in moreSpecifications">
	  			<h3>{{ index }}</h3>
	  			<div v-for="(value, name) in sp" class="mb-3">
			        <label class="label">{{name}}</label>
			        <div>
			          <input class="form-control mb-2" type="text" v-model="sp[name]">
			          <div @click="removeCustomAttribute(index, name)" class="btn btn-danger">&times;</div>
			        </div>
		      	</div>
		      	<div>
		      		<input class="form-control mb-2" type="text" v-model="newAttributeName[index]" placeholder="Add new attribute">
			        <div @click="addNewCustomAttribute(index)" class="btn btn-info">Add {{ index }}</div>
			    </div>
			    <div @click="removeSpecif(index)" class="btn btn-danger">Remove Specification</div>
	  		</div>

	  		<div class="col-md-12 mb-3">
	  			<input class="form-control mb-2" type="text" v-model="newSpecifName" placeholder="add specification">
	  			<div @click="addSpecif()" class="btn btn-info">Add Specification</div>
	  		</div> -->
  	

			<div class="col-md-12 text-right">
				<button class="btn btn-secondary">Submit</button>
			</div>
  		</div>
  	</form>
  </div>
</template>

<script>
	import json from './../product.json'
	export default {
		data() {
			return {
				output: '',
				name: '',
				excerpt: '',
				brand: '',
				categories: '',
				type: [],
				series: '',
				os: '',
				sim: [],
				storage: [],
				ram: [],
				displaySize: [],
				mainCamera: '',
				frontCamera: '',
				shape: '',
				waterResistant: '',
				batterymAh: '',
				color: [],
				network: {},
				specifications: {
					type: {
						type: [],
						shape: ''
					},
					basic: {
						os: [],
						osVersion: [],
						sim: [],
						cpu: [],
						storage: [],
						ram: [],
						battery: []
					},
					screen: {
						displaySize: [],
						resolation: []
					},
					network:	{
						Type	: [],
						'2G'	: [],
						'3G'	: [],
						'4G'	: []
					},
					camera:   {
						mainCamera : [],
						frontCamera: []
					},
					size: {
						dimensions: [],
						weight	: []
					},
					others:   {
						features: []
					}
				},
				newTypeOption: '',
				newScreenOption: '',
				description: '',
				seo: {
					meta_title: '',
					meta_keyword: '',
					meta_keywords: [],
					meta_description: ''
				},
				urls: {
					offical_website_url: '',
					youtube_video_id: '',
					compare_products_slug: ''
				},
				others: '',
				// newAttribute: {},
				// moreSpecifications: {
				// 	color: {
				// 		red: '',
				// 		blue: ''
				// 	}
				// },
				// newSpecifName: '',
				// newSpecif: {}

			}
		},
		mounted() {
			this.axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => (this.posts = response.data))
		},
		watch: {
			os: function(val){
				this.specifications.basic.os = val
			},
			sim: function(val){
				this.specifications.basic.sim = val
			},
			ram: function(val){
				this.specifications.basic.ram = val
			}
		},
		computed: {
			
		},
		methods: {
			formSubmit(e) {
				e.preventDefault();
                let currentObj = this;
                this.axios.post('https://jsonplaceholder.typicode.com/posts', {
                	name: this.name,
                	excerpt: this.excerpt,
                	brand: this.brand,
                	categories: this.categories,
                	type: this.type,
                	series: this.series,
                	os: this.os,
                	sim: this.sim,
                	storage: this.storage,
                	ram: this.ram,
                	displaySize: this.displaySize,
                	mainCamera: this.mainCamera,
                	frontCamera: this.frontCamera,
                	shape: this.shape,
                	waterResistant: this.waterResistant,
                	color: this.color,
                	network: this.network,
                	specifications: this.specifications,
                	description: this.description,
                	seo: this.seo,
                	urls: this.urls,
                	others: this.others,
                	selectedTags: this.selectedTags,
                	moreSpecifications: this.moreSpecifications,
	                
                })
                .then(function (response) {
                    currentObj.output = response.data;
                    console.log(currentObj.output);
                })
                .catch(function (error) {
                    currentObj.output = error;
                    console.log(currentObj.output);
                });
            },

            addOption(optionName, newAttribute){
            	if(newAttribute){
            		this.$set(optionName, newAttribute, '')
	        		this.newScreenOption = ''
	        		this.newTypeOption = ''
            	} else {
            		console.log('Please fillup the input box!')
            	}
        		
            },
            removeOption(optionName, name){
            	this.$delete(optionName, name)
            },




            

            // addSpecif(){
            // 	if(this.newSpecifName){
            // 		this.moreSpecifications[this.newSpecifName] = this.newSpecif;
            // 		this.newSpecifName = '';
            // 	}else{
            // 		console.log('Please fillup up the form!')
            // 	}
            // },
            // removeSpecif(index){
            // 	this.$delete(this.moreSpecifications, index)
            // },


		}
	};
</script>
