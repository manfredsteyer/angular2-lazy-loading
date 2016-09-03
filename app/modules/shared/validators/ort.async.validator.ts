

export class OrtAsyncValidator {


    static validate(c): Promise<any> {

        return new Promise<any>((resove) => {
            // Kommunikation mit Server simulieren
            setTimeout(() => {

                if (c.value == 'Graz'
                    || c.value == 'Hamburg') {
                    resove({});
                }

                resove({ ortAsync: true });
            }, 2000);
      });

    }

}