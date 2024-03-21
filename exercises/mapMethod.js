//.map() = accepts a callback and applies that function
        //to each element of an array, then return a new array

        const numbers = [1, 2, 3, 4, 5, 6];


        const squares = numbers.map(square);
        
        console.log(squares);
        function square(element){
            return Math.pow(element,2);
        }
        
        const dates = ["2024-1-10","2024-1-20","2024-1-30","2024-2-10","2024-2-20"];
        const formattedDates = dates.map(formatDates);
        console.log(formattedDates);
        function formatDates(element){
            const parts = element.split("-");
            return `${parts[2]}:${parts[1]}:${parts[0]}`;
        }
        