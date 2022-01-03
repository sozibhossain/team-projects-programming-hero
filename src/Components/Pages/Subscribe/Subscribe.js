import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div class="py-6 py-md-8 bg-primary">
                <div class="container">
                    <div class="row align-items-center py-2">
                        <div class="col-xl-6 mb-4 mb-xl-0 text-capitalize">
                            <h1 class="text-white">Subscribe our newsletter</h1>
                            <p class="font-size-lg text-white mb-0">Your download should start automatically, if not  Click here. Should I give up, huh?.</p>
                        </div>

                        <div class="col-xl-6">
                            <form class="ms-xl-5">
                                <div class="input-group d-block d-md-flex bg-white p-1 rounded">
                                    {/* <input type="text" class="form-control w-100 w-md-auto form-control-sm rounded border-0 placeholder-1" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2"> */}
                                    <div class="input-group-append ms-0">
                                        <button class="btn btn-sm btn-blue w-100 w-md-auto btn-wide rounded border-0" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;