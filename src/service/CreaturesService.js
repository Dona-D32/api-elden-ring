import { config } from '../config';

class CreaturesService {
  endpoint = "creatures"; 
  baseUrl = config.baseUrl;
  creaturesUrl = `${this.baseUrl}/${this.endpoint}`;
  
  async getAllCreatures() {
    try {
      const res = await fetch(this.creaturesUrl);
      if (!res.ok) {
        throw new Error('Error fetching creatures data:', res.status, res.statusText);
      }
      const data = await res.json();
      if (!data.success || !Array.isArray(data.data)) {
        throw new Error('Invalid creatures data format.');
      }

      console.log('Creatures data:', data.data);
      // Now you can directly use "data.data" with the method "map" to process each creature.
      const mappedData = data.data.map(creature => ({
        id: creature.id,
        name: creature.name,
        image: creature.image,
        description: creature.description,
        location: creature.location,
        drops: creature.drops,
      }));

      return mappedData;
    } catch (error) {
      console.error('Error fetching creatures data:', error);
      throw error;
    }
  }
}

export default CreaturesService;
