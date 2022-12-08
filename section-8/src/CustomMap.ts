export interface Marker {
  location: {
    lat: number;
    lng: number;
  };

  getContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(HTMLElement: HTMLElement) {
    this.googleMap = new google.maps.Map(HTMLElement, {
      zoom: 2.5,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(entity: Marker): void {
    const marker = new google.maps.Marker({
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
      map: this.googleMap,
    });

    addEventListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.getContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
