export class ResponsetHandler { 

    sendSuccess = (res, message, data) => {
        res.status(200).json({
            message: message || 'Success result', data
        });
    }

    sendError = (res, message) => {
        res.status(400).json({
            message: message || 'Error result'
        });
    }
}